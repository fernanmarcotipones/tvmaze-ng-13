import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of } from "rxjs";
import { ShowService } from "src/app/shared/services/show.service";
import * as SearchActions from './search.actions';

@Injectable()
export class SearchEffects {
  constructor(
    private actions$: Actions,
    private showService: ShowService
  ) {}

  searchShows$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SearchActions.searchShowsRequest),
      mergeMap(action => {
        return this.showService.searchShows(action.query).pipe(
          map((shows) => SearchActions.searchShowsSuccess({ shows })),
          catchError((error) =>
            of(SearchActions.searchShowsFailure({ error: error.message }))
          )
        );
      })
    )
  );
}