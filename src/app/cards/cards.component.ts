import { Component, OnInit } from '@angular/core';
import { CardComments } from '../model/card-comments';
import { CardList } from '../model/card-list';
import { CardService } from '../services/card.service';

@Component({
  selector: 'gra-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  cards:CardList = new CardList();

  selectedCardId=-1;


  params = {
    page:1,
    pageSize:5
  }

  constructor(private service:CardService) { }

  ngOnInit(): void {

    this.getCards();
  }

  getCards(){
    this.service.getAll(this.params).subscribe((cards:CardList)=>{
      this.cards = cards;
    })
  }

  onPageChange(newPage:number){
    this.params.page = newPage;
    this.getCards();
  }

  changePageSize(newPageSize:number){
    this.params.pageSize = newPageSize;
    this.getCards();
  }


}
