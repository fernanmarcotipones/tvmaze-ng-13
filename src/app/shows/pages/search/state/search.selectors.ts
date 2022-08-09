import { createSelector } from "@ngrx/store";
import { AppState } from "src/app/shared/models/appState";

export const showsFeature = (state: AppState) => state.shows;

export const showsLoadingSelector = createSelector(
  showsFeature,
  (state) => state.isLoading
);

export const showsSelector = createSelector(
  showsFeature,
  (state) => state.shows
);

export const showsErrorSelector = createSelector(
  showsFeature,
  (state) => state.error
);

export const showsQuerySelector = createSelector(
  showsFeature,
  (state) => state.query
);