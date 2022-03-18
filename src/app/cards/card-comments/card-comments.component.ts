import { Component, Input, OnInit } from '@angular/core';
import { CardComments } from 'src/app/model/card-comments';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'gra-card-comments',
  templateUrl: './card-comments.component.html',
  styleUrls: ['./card-comments.component.css']
})
export class CardCommentsComponent implements OnInit {

  comments:CardComments[] = [];

  @Input()cardId:number = 0;

  newComment = new CardComments();

  constructor(private service:CardService) { }

  ngOnInit(): void {

  }

  ngOnChanges():void{
    this.getComments();
  }

 getComments(){
   this.service.getComments(this.cardId).subscribe((comments:CardComments[])=>{
     this.comments = comments;
   })
 }

 postComment(){
  this.newComment._id = this.cardId;
  this.newComment.date = new Date().toISOString();
  this.service.postComment(this.cardId, this.newComment).subscribe((comment:CardComments)=>{
    this.comments.push(comment);
    this.newComment = new CardComments();
  })
}

}
