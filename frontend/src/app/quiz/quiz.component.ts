import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { QuizService } from '../services/quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
  quizList: any[] = []
  quizName: string = ''
  constructor(
    private _quiz: QuizService,
    private _tostr: ToastrService
  ) { }

  ngOnInit(): void {
    this.load()
  }

  load() {
    this._quiz.getQuiz().subscribe(
      (resp: any) => {
        this.quizList = resp.data

      }, err => {
        this._tostr.error('Error while loading quiz')

      }
    )
  }
  addQuiz() {

    this._quiz.createQuiz({ name: this.quizName }).subscribe(
      (resp) => {
        this.quizName = ''
        this.load()
        this._tostr.success('Successfully created')
      }, (err) => {
        this._tostr.error('Error while createing quiz')

      }
    )
  }

  removeQuiz(id: string = '') {
    this._quiz.deleteQuiz(id).subscribe(
      (resp) => {
        this.load()
        this._tostr.success('Successfully deleted')
      }, (err) => {
        this._tostr.error('Error while deleting quiz')

      }
    )
  }

}
