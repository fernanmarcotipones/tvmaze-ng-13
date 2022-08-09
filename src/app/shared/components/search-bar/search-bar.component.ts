import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'tvm-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  @Input()
  public title: string = 'Search';

  @Input()
  public query: string | null = '';

  @Output()
  public onSearch = new EventEmitter<string | null>();

  constructor() { }

  public ngOnInit(): void {
  }

  public search(): void {
    this.onSearch.emit(this.query);
  }

}
