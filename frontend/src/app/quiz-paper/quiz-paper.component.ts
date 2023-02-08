import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AnswerService } from '../services/answer.service';
import { QuestionService } from '../services/question.service';

@Component({
  selector: 'app-quiz-paper',
  templateUrl: './quiz-paper.component.html',
  styleUrls: ['./quiz-paper.component.scss']
})
export class QuizPaperComponent implements OnInit {
   private quizId:string=''
   questionList:any[]=[]
  constructor(
    private _question:QuestionService,
    private _activeRouter:ActivatedRoute,
    private _answer:AnswerService,
    private _tostr:ToastrService) { 
      this.quizId=_activeRouter.snapshot.params['quizid']
    }

  ngOnInit(): void {
    this.load()
  }

  load(){
    this._question.getQuiz(this.quizId).subscribe(
      (resp:any)=>{
         this.questionList=resp.data
      },(err)=>{
        console.log(err);
        
      }
    )
  }

  save(){
    console.log(this.questionList);
    let finalData=this.questionList.map(item=>({questionId:item._id,question:item.question,quizId:item.quizId,answer:item.answer}))
    this._answer.createAnswer(finalData).subscribe(
      (resp)=>{
        this._tostr.success('Successfully Submitted')
      },(err)=>{
        this._tostr.error('Error while submitting answer')
      }
    )
  }

}
