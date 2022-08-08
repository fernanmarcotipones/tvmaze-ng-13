import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/shared/models/appState';
import { ShowDetails } from 'src/app/shared/models/show';
import { detailErrorSelector, detailLoadingSelector, detailSelector } from 'src/app/shared/states/show/show.selectors';
import * as ShowActions from '../../../shared/states/show/show.actions';

@Component({
  selector: 'tvm-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  public showId: number = 1;

  public isLoading$: Observable<boolean>;

  public error$: Observable<string | null>;

  public show$: Observable<ShowDetails>;

  constructor(
    private store: Store<AppState>,
    private route: ActivatedRoute,
  ) {
    this.isLoading$ = this.store.pipe(select(detailLoadingSelector));
    this.error$ = this.store.pipe(select(detailErrorSelector));
    this.show$ = this.store.pipe(select(detailSelector));
  }

  public ngOnInit(): void {
    this.showId = this.route.snapshot.params['id'];
    this.store.dispatch(ShowActions.getShowRequest({ id: this.showId }));
  }

}
