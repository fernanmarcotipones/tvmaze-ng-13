import { createAction, props } from "@ngrx/store";
import { Show } from "src/app/shared/models/show";

export const searchShowsRequest = createAction(
  '[Shows] Search Shows', 
  props<{ query: string | null }>()
);
export const searchShowsSuccess = createAction(
  '[Shows] Search Shows success',
  props<{ shows: Show[] }>()
);
export const searchShowsFailure = createAction(
  '[Shows] Search Shows failure',
  props<{ error: string }>()
);