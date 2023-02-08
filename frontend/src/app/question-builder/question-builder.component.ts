import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { QuestionService } from '../services/question.service';


export type question = {
  _id?:string,
  question: string,
  type: string,
  options: any[],
  quizId:string
}


@Component({
  selector: 'app-question-builder',
  templateUrl: './question-builder.component.html',
  styleUrls: ['./question-builder.component.scss']
})


export class QuestionBuilderComponent implements OnInit {
  questions: question[] = []

  quizid:string=''
  constructor(
    private _question: QuestionService,
    private _tostr: ToastrService,
    private _router:Router,
    private _activeRouter:ActivatedRoute
  ) { 
    
    this.quizid=this._activeRouter.snapshot.params['quizid']
    console.log(this._activeRouter.snapshot.params,this.quizid)
  }

  modalObj: question = {
    question: '',
    quizId:String(this.quizid),
    options: [{ text: '' }, { text: '' }],
    type: 'checkbox'
  }

  ngOnInit(): void {
    if(this.quizid)
    this.load()
    else
    this._router.navigate(['/'])
  }

  load() {
    this._question.getQuiz(this.quizid).subscribe((resp: any) => {
      console.log(resp);
      this.questions = resp.data
    }, (err) => console.log(err))
  }

  addQuestion() {
    if (!this.modalObj.question){
       this._tostr.error('Question is required')
       return
    }
    if (this.modalObj.type=='checkbox' && (!this.modalObj.options[0].text || !this.modalObj.options[1].text)){
      this._tostr.error('Minimum two answer is required')
      return
   }
    if (this.modalObj.type == 'paragraph')
      this.modalObj.options = []
      this.modalObj.quizId=this.quizid
    this._question.createQuiz(this.modalObj).subscribe((resp) => {
      this.modalObj = {
        question: '',
        quizId:String(this.quizid),
        options: [{ text: '' }, { text: '' }],
        type: 'checkbox'
      }
      this.load()
    }, err => {
      console.log(err);

    })
    // this.questions.push(this.modalObj)


  }

  removeQuestion(id: string='') {
    this._question.deleteQuiz(id).subscribe(
      resp => {
        this.load()
      }, err => {
        console.log(err);

      }
    )
    // this.questions.splice(index,1)
  }

  addOption() {
    for(let op of this.modalObj.options){
      if(!op.text){
        this._tostr.error('Please fill all empty answer')
        return
      }
    }
    this.modalObj.options.push({ text: '' })

  }

  removeOption(index: number) {
    this.modalObj.options.splice(index, 1)
  }

}
