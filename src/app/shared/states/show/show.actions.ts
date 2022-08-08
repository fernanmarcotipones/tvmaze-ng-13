import { createAction, props } from "@ngrx/store";
import { Show } from "../../models/show";

export const getShows = createAction('[Posts] Get Shows');
export const getShowsSuccess = createAction(
  '[Posts] Get Shows success',
  props<{ shows: Show[] }>()
);
export const getShowsFailure = createAction(
  '[Posts] Get Shows failure',
  props<{ error: string }>()
);

export const searchShowsRequest = createAction(
  '[Show] Search Shows', 
  props<{ query: string }>()
);
export const searchShowsSuccess = createAction(
  '[Show] Search Shows success',
  props<{ shows: Show[] }>()
);
export const searchShowsFailure = createAction(
  '[Show] Search Shows failure',
  props<{ error: string }>()
);