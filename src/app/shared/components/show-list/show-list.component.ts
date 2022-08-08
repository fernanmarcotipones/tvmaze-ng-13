import { Component, Input, OnInit } from '@angular/core';
import { Show } from '../../models/show';

@Component({
  selector: 'tvm-show-list',
  templateUrl: './show-list.component.html',
  styleUrls: ['./show-list.component.scss']
})
export class ShowListComponent implements OnInit {

  @Input()
  public shows: Show[] | null = [];

  constructor() { }

  public ngOnInit(): void {
  }

}
