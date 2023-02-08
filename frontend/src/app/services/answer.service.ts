import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({providedIn:"root"})

export class AnswerService{
    constructor(private _http:HttpClient){}

    getAnswer(quizId:string){
        return this._http.get('/api/answer/get/'+quizId)
    }

    createAnswer(list:any){
        return this._http.post('/api/answer/create',list)
    }

}

