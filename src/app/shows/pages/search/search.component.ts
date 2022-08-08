import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/shared/models/appState';
import { Show } from 'src/app/shared/models/show';
import { errorSelector, isLoadingSelector, showsSelector } from 'src/app/shared/states/show/show.selectors';
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

  constructor(private store: Store<AppState>) {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.error$ = this.store.pipe(select(errorSelector));
    this.shows$ = this.store.pipe(select(showsSelector));
  }

  public ngOnInit(): void {
  }

  public search(): void {
    this.store.dispatch(ShowActions.searchShowsRequest({ query: this.query }));
  }

}
