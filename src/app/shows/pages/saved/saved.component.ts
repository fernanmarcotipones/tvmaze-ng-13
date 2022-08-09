import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/shared/models/appState';
import { Show } from 'src/app/shared/models/show';
import { resultsSelector, savedErrorSelector, savedLoadingSelector, savedQuerySelector, savedSelector } from './state/saved.selectors';
import * as SavedActions from './state/saved.actions';

@Component({
  selector: 'tvm-saved',
  templateUrl: './saved.component.html',
  styleUrls: ['./saved.component.scss']
})
export class SavedComponent implements OnInit {

  public isLoading$: Observable<boolean>;

  public error$: Observable<string | null>;

  public query$: Observable<string | null>;

  public shows$: Observable<Show[]>;

  public results$: Observable<Show[]>;

  constructor(
    private store: Store<AppState>,
    private router: Router,
  ) {
    this.isLoading$ = this.store.pipe(select(savedLoadingSelector));
    this.error$ = this.store.pipe(select(savedErrorSelector));
    this.query$ = this.store.pipe(select(savedQuerySelector));
    this.shows$ = this.store.pipe(select(savedSelector));
    this.results$ = this.store.pipe(select(resultsSelector));
  }

  public ngOnInit(): void {
  }

  public search(query: string | null): void {
    this.store.dispatch(SavedActions.searchSavedRequest({ query }));
  }

  public showDetail(id: number): void {
    this.router.navigate(['../detail/', id]);
  }

  public removeFromSaved(id: number): void {
    this.store.dispatch(SavedActions.removeSavedRequest({ id }));
  }

}
