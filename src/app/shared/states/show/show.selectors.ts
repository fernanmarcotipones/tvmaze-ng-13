import { createSelector } from "@ngrx/store";
import { AppState } from "../../models/appState";

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

export const detailFeature = (state: AppState) => state.detail;

export const detailLoadingSelector = createSelector(
  detailFeature,
  (state) => state.isLoading
);

export const detailSelector = createSelector(
  detailFeature,
  (state) => state.show
);

export const detailErrorSelector = createSelector(
  detailFeature,
  (state) => state.error
);