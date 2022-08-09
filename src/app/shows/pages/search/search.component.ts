import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/shared/models/appState';
import { Show } from 'src/app/shared/models/show';
import { showsErrorSelector, showsLoadingSelector, showsQuerySelector, showsSelector } from './state/search.selectors';
import * as SearchActions from './state/search.actions';
import * as SavedActions from '../saved/state/saved.actions';
import { savedSelector } from '../saved/state/saved.selectors';

@Component({
  selector: 'tvm-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public isLoading$: Observable<boolean>;

  public error$: Observable<string | null>;

  public query$: Observable<string | null>;

  public shows$: Observable<Show[]>;

  public saved$: Observable<Show[]>;

  constructor(
    private store: Store<AppState>,
    private router: Router,
  ) {
    this.isLoading$ = this.store.pipe(select(showsLoadingSelector));
    this.error$ = this.store.pipe(select(showsErrorSelector));
    this.query$ = this.store.pipe(select(showsQuerySelector));
    this.shows$ = this.store.pipe(select(showsSelector));
    this.saved$ = this.store.pipe(select(savedSelector));
  }

  public ngOnInit(): void {
  }

  public search(query: string | null): void {
    this.store.dispatch(SearchActions.searchShowsRequest({ query }));
  }

  public showDetail(id: number): void {
    this.router.navigate(['../detail/', id]);
  }

  public addToSaved(show: Show): void {
    this.store.dispatch(SavedActions.addSavedRequest({ show }));
  }

  public removeFromSaved(id: number): void {
    this.store.dispatch(SavedActions.removeSavedRequest({ id }));
  }

}
