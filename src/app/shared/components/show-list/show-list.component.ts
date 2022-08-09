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

  @Input()
  public saved: Show[] | null = [];

  @Output()
  public onDetail = new EventEmitter<number>();

  @Output()
  public onBookmark = new EventEmitter<Show>();

  @Output()
  public onDelete = new EventEmitter<number>();

  constructor() { }

  public ngOnInit(): void {
  }

  public showDetail(id: number): void {
    this.onDetail.emit(id);
  }

  public bookmarkShow(show: Show): void {
    this.onBookmark.emit(show);
  }

  public deleteShow(id: number): void {
    this.onDelete.emit(id);
  }

  public isSaved(id: number): boolean {
    const show = this.saved?.find(item => item.show.id === id);
    return !!show;
  }

}
