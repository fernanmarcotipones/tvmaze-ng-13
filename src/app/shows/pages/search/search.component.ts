import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/shared/models/appState';
import { Show } from 'src/app/shared/models/show';
import { showsErrorSelector, showsLoadingSelector, showsSelector } from 'src/app/shared/states/show/show.selectors';
import * as ShowActions from '../../../shared/states/show/show.actions';

@Component({
  selector: 'tvm-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public isLoading$: Observable<boolean>;

  public error$: Observable<string | null>;

  public shows$: Observable<Show[]>;

  public query: string = '';

  constructor(
    private store: Store<AppState>,
    private router: Router,
  ) {
    this.isLoading$ = this.store.pipe(select(showsLoadingSelector));
    this.error$ = this.store.pipe(select(showsErrorSelector));
    this.shows$ = this.store.pipe(select(showsSelector));
  }

  public ngOnInit(): void {
  }

  public search(): void {
    this.store.dispatch(ShowActions.searchShowsRequest({ query: this.query }));
  }

  public showDetail(id: number): void {
    this.router.navigate(['../detail/', id]);
  }

}
