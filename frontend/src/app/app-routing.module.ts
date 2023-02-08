import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnswerComponent } from './answer/answer.component';
import { QuestionBuilderComponent } from './question-builder/question-builder.component';
import { QuizPaperComponent } from './quiz-paper/quiz-paper.component';
import { QuizComponent } from './quiz/quiz.component';

const routes: Routes = [
  {
    path:'',
    component:QuizComponent
  },
  {
    path:'question/:quizid',
    component:QuestionBuilderComponent
  },
  {
    path:'quizpaper/:quizid',
    component:QuizPaperComponent
  },
  {
    path:'answer/:quizid',
    component:AnswerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }