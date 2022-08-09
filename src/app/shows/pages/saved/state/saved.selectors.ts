import { createSelector } from "@ngrx/store";
import { AppState } from "src/app/shared/models/appState";

export const savedFeature = (state: AppState) => state.saved;

export const savedLoadingSelector = createSelector(
  savedFeature,
  (state) => state.isLoading
);

export const savedSelector = createSelector(
  savedFeature,
  (state) => state.shows
);

export const resultsSelector = createSelector(
  savedFeature,
  (state) => state.results
);

export const savedErrorSelector = createSelector(
  savedFeature,
  (state) => state.error
);

export const savedQuerySelector = createSelector(
  savedFeature,
  (state) => state.query
);