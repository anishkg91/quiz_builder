import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({providedIn:"root"})

export class QuestionService{
    constructor(private _http:HttpClient){}

    getQuiz(quizId:string){
        return this._http.get('/api/question/get/'+quizId)
    }

    createQuiz(obj:any){
        return this._http.post('/api/question/create',obj)
    }

    updateQuiz(id:string,obj:any){
        return this._http.put('/api/question/update/'+id,obj)
    }

    deleteQuiz(id:string){
        return this._http.delete('/api/question/delete/'+id)
    }
}

