import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({providedIn:"root"})

export class QuizService{
    constructor(private _http:HttpClient){}

    getQuiz(){
        return this._http.get('/api/quiz/get')
    }

    createQuiz(obj:any){
        return this._http.post('/api/quiz/create',obj)
    }

    updateQuiz(id:string,obj:any){
        return this._http.put('/api/quiz/update/'+id,obj)
    }

    deleteQuiz(id:string){
        return this._http.delete('/api/quiz/delete/'+id)
    }
}

