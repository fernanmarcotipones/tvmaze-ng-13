import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Show } from '../../models/show';

@Component({
  selector: 'tvm-show-list',
  templateUrl: './show-list.component.html',
  styleUrls: ['./show-list.component.scss']
})
export class ShowListComponent implements OnInit {

  @Input()
  public shows: Show[] | null = [];

  @Output()
  public onDetail = new EventEmitter<number>();

  @Output()
  public onBookmark = new EventEmitter<number>();

  @Output()
  public onDelete = new EventEmitter<number>();

  constructor() { }

  public ngOnInit(): void {
  }

  public showDetail(id: number): void {
    this.onDetail.emit(id);
  }

  public bookmarkShow(id: number): void {
    this.onBookmark.emit(id);
  }

  public deleteShow(id: number): void {
    this.onDelete.emit(id);
  }

}
