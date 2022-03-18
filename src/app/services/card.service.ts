import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CardList } from '../model/card-list';
import { Card } from '../model/card';
import { CardComments } from '../model/card-comments';
import { ReturnStatement } from '@angular/compiler';

const baseURL = "http://localhost:3000/api/cards";

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(private http: HttpClient) { }

  getAll(params?:any):Observable <CardList>{

    let queryParams = {}
    if(params){
      queryParams = {
        params:new HttpParams()
        .set('page', params.page || "")
        .set('pageSize', params.pageSize || "")
      }
    }

    return this.http.get(baseURL, queryParams).pipe(map((data:any)=>{
      return new CardList(data);
    }))
  }

  updateCard(card:Card):Observable<Card>{
    return this.http.put(`${baseURL}/${card._id}`, card).pipe(map((data:any)=>{
      return new Card(data);
    }))
  }

  getComments(cardId:number):Observable<CardComments[]>{
    return this.http.get(`${baseURL}/${cardId}/comments`).pipe(map((data:any)=>{
      return data.results.map((x:any)=> new CardComments(x));
    }))
  }

  postComment(cardId:number, comment:CardComments):Observable<CardComments>{
    return this.http.post(`${baseURL}/${cardId}/comments`, comment).pipe(map((data:any)=>{
      return new CardComments(data)
    }));
   
  }
}
