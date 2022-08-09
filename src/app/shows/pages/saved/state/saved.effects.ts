import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { withLatestFrom } from "rxjs";
import { AppState } from "src/app/shared/models/appState";
import * as SavedActions from './saved.actions';
import { savedSelector } from "./saved.selectors";

@Injectable()
export class SavedEffects {
  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
  ) {}

  savedActions$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(SavedActions.searchSavedRequest, SavedActions.addSavedRequest, SavedActions.removeSavedRequest),
        withLatestFrom(this.store.select(savedSelector)),
      ),
    { dispatch: false }
  );
}