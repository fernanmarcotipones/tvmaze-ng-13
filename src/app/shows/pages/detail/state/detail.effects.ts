import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of } from "rxjs";
import { ShowService } from "src/app/shared/services/show.service";
import * as DetailActions from './detail.actions';

@Injectable()
export class DetailEffects {
  constructor(
    private actions$: Actions,
    private showService: ShowService
  ) {}

  getShow$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DetailActions.getShowRequest),
      mergeMap(action => {
        return this.showService.getShow(action.id).pipe(
          map((show) => DetailActions.getShowSuccess({ show })),
          catchError((error) =>
            of(DetailActions.getShowFailure({ error: error.message }))
          )
        );
      })
    )
  );
}