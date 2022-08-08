import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of } from "rxjs";
import { ShowService } from "../../services/show.service";
import * as ShowActions from './show.actions';

@Injectable()
export class ShowEffects {
  constructor(
    private actions$: Actions,
    private showService: ShowService
  ) {}

  searchShows$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ShowActions.searchShowsRequest),
      mergeMap(action => {
        return this.showService.searchShows(action.query).pipe(
          map((shows) => ShowActions.searchShowsSuccess({ shows })),
          catchError((error) =>
            of(ShowActions.searchShowsFailure({ error: error.message }))
          )
        );
      })
    )
  );

  getShow$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ShowActions.getShowRequest),
      mergeMap(action => {
        return this.showService.getShow(action.id).pipe(
          map((show) => ShowActions.getShowSuccess({ show })),
          catchError((error) =>
            of(ShowActions.getShowFailure({ error: error.message }))
          )
        );
      })
    )
  );
}