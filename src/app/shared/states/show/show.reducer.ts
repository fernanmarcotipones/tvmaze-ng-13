import { createReducer, on } from "@ngrx/store";
import { DEFAULT_SHOW, DEFAULT_SHOW_DETAILS, DetailState, ShowsState } from "../../models/show";
import * as ShowActions from './show.actions';

export const showInitialState: ShowsState = {
  isLoading: false,
  shows: [],
  error: null,
};

export const detailInitialState: DetailState = {
  isLoading: false,
  show: DEFAULT_SHOW_DETAILS,
  error: null,
};

export const showReducer = createReducer(
  showInitialState,
  on(ShowActions.searchShowsRequest, (state) => ({ ...state, isLoading: true })),
  on(ShowActions.searchShowsSuccess, (state, action) => ({
    ...state,
    isLoading: false,
    shows: action.shows,
  })),
  on(ShowActions.searchShowsFailure, (state, action) => ({
    ...state,
    isLoading: false,
    error: action.error,
  })),
);

export const detailReducer = createReducer(
  detailInitialState,
  on(ShowActions.getShowRequest, (state) => ({ ...state, isLoading: true })),
  on(ShowActions.getShowSuccess, (state, action) => ({
    ...state,
    isLoading: false,
    show: action.show,
  })),
  on(ShowActions.getShowFailure, (state, action) => ({
    ...state,
    isLoading: false,
    error: action.error,
  })),
);