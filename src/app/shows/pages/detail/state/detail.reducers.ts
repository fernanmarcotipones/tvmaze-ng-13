import { createReducer, on } from "@ngrx/store";
import { DEFAULT_SHOW_DETAILS, DetailState } from "src/app/shared/models/show";
import * as DetailActions from './detail.actions';
import { clone } from "lodash";

export const detailInitialState: DetailState = {
  isLoading: false,
  show: clone(DEFAULT_SHOW_DETAILS),
  error: null,
};

export const detailReducers = createReducer(
  detailInitialState,
  on(DetailActions.getShowRequest, (state) => ({ ...state, isLoading: true })),
  on(DetailActions.getShowSuccess, (state, action) => ({
    ...state,
    isLoading: false,
    show: action.show,
  })),
  on(DetailActions.getShowFailure, (state, action) => ({
    ...state,
    isLoading: false,
    error: action.error,
  })),
);