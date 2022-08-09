import { createSelector } from "@ngrx/store";
import { AppState } from "src/app/shared/models/appState";

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