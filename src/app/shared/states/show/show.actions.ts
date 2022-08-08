import { createAction, props } from "@ngrx/store";
import { Show, ShowDetails } from "../../models/show";

export const searchShowsRequest = createAction(
  '[Shows] Search Shows', 
  props<{ query: string }>()
);
export const searchShowsSuccess = createAction(
  '[Shows] Search Shows success',
  props<{ shows: Show[] }>()
);
export const searchShowsFailure = createAction(
  '[Shows] Search Shows failure',
  props<{ error: string }>()
);

export const getShowRequest = createAction(
  '[Detail] Get Show',
  props<{ id: number }>()
);
export const getShowSuccess = createAction(
  '[Detail] Get Show success',
  props<{ show: ShowDetails }>()
);
export const getShowFailure = createAction(
  '[Detail] Get Show failure',
  props<{ error: string }>()
);