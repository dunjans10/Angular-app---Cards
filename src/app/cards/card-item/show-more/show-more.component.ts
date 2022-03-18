import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'gra-show-more',
  templateUrl: './show-more.component.html',
  styleUrls: ['./show-more.component.css']
})
export class ShowMoreComponent implements OnInit {

  @Input()
  text = "";

  @Input()
  maxTextSize = 100;

  toShowMore=false;
  showText="";

  constructor() { }

  ngOnInit(): void {

    if(this.text.length > this.maxTextSize){
      this.showText = this.text.substring(0, this.maxTextSize) + "...";
    }

  }

  toggleShow(){
    this.toShowMore = !this.toShowMore;
    if(this.toShowMore){
      this.showText = this.text;
    }else {
      this.showText = this.text.substring(0, this.maxTextSize) + "...";
    }
  }



}
