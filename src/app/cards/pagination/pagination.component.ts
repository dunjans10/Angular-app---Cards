import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'gra-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  @Input()
  page=1;

  @Input()
  pageSize=1;

  @Input()
  collectionSize=0;

  @Output()
  pageChange = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  changePage(newPage:number){
    this.pageChange.emit(newPage);
  }

}
