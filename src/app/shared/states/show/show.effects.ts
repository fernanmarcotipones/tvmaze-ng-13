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

  getShows$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ShowActions.getShows),
      mergeMap(() => {
        return this.showService.getShows().pipe(
          map((shows) => ShowActions.getShowsSuccess({ shows })),
          catchError((error) =>
            of(ShowActions.getShowsFailure({ error: error.message }))
          )
        );
      })
    )
  );

  searchShows$ = createEffect(() =>
  this.actions$.pipe(
    ofType(ShowActions.searchShowsRequest),
    mergeMap((action) => {
      return this.showService.searchShows(action.query).pipe(
        map((shows) => ShowActions.searchShowsSuccess({ shows })),
        catchError((error) =>
          of(ShowActions.searchShowsFailure({ error: error.message }))
        )
      );
    })
  )
);
}