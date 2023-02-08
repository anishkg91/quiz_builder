import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AnswerService } from '../services/answer.service';

export type answerType={
  question:string,
  answer:string
}

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.scss']
})
export class AnswerComponent implements OnInit {
  answerList:answerType[]=[]
  quizid: string;
  constructor(
    private _activeRouter:ActivatedRoute,
    private _answer:AnswerService,
    private _tostr:ToastrService
  ) { 
    
    this.quizid=this._activeRouter.snapshot.params['quizid']
    console.log(this._activeRouter.snapshot.params,this.quizid)
  }

  ngOnInit(): void {
     this._answer.getAnswer(this.quizid).subscribe(
      (resp:any)=>{
        if(resp.data && resp.data.length){
          this.answerList=resp.data
        }
      },(err)=>{
         this._tostr.error('Error while fetching answer data')
      }
     )
  }

}
