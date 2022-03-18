import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Card } from 'src/app/model/card';
import { CardService } from 'src/app/services/card.service';


@Component({
  selector: 'gra-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.css']
})
export class CardItemComponent implements OnInit {

 @Input()
  card:Card = new Card();

@Output()
cardClicked = new EventEmitter<number>();



  constructor(private service:CardService) { }

  ngOnInit(): void {
  }

  changeGrade(newGrade:number){
    this.card.grade = newGrade;
    this.service.updateCard(this.card).subscribe((card:Card)=>{
      this.card = card;
    })
}

showComments(){
  this.cardClicked.emit(this.card._id);
}



}
