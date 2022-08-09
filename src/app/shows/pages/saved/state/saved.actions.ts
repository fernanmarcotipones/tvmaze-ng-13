import { createAction, props } from "@ngrx/store";
import { Show } from "src/app/shared/models/show";

export const searchSavedRequest = createAction(
  '[Saved] Search Saved', 
  props<{ query: string | null }>()
);
export const addSavedRequest = createAction(
  '[Saved] Add Saved', 
  props<{ show: Show }>()
);
export const removeSavedRequest = createAction(
  '[Saved] Remove Saved', 
  props<{ id: number }>()
);