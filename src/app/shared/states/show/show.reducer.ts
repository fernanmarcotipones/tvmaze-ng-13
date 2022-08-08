import { createReducer, on } from "@ngrx/store";
import { ShowsState } from "../../models/show";
import * as ShowActions from './show.actions';

export const initialState: ShowsState = {
  isLoading: false,
  shows: [],
  error: null,
};

export const showReducer = createReducer(
  initialState,
  on(ShowActions.getShows, (state) => ({ ...state, isLoading: true })),
  on(ShowActions.getShowsSuccess, (state, action) => ({
    ...state,
    isLoading: false,
    shows: action.shows,
  })),
  on(ShowActions.getShowsFailure, (state, action) => ({
    ...state,
    isLoading: false,
    error: action.error,
  })),
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