import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/shared/models/appState';
import { ShowDetails } from 'src/app/shared/models/show';
import { detailSelector } from '../../pages/detail/state/detail.selectors';

@Component({
  selector: 'tvm-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public show$: Observable<ShowDetails>;

  constructor(
    private store: Store<AppState>,
    private router: Router,
  ) {
    this.show$ = this.store.pipe(select(detailSelector));
  }

  public ngOnInit(): void {
  }

  // public isLinkActive(url: string): void {
  //   return this.router.isActive(url, false);
  // }

}
