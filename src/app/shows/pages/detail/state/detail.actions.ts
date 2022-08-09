import { createAction, props } from "@ngrx/store";
import { ShowDetails } from "src/app/shared/models/show";

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