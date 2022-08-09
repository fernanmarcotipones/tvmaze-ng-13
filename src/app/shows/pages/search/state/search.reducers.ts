import { createReducer, on } from "@ngrx/store";
import { ShowsState } from "src/app/shared/models/show";
import * as SearchActions from './search.actions';

export const searchInitialState: ShowsState = {
  isLoading: false,
  shows: [],
  error: null,
  query: null,
};

export const searchReducers = createReducer(
  searchInitialState,
  on(SearchActions.searchShowsRequest, (state, action) => ({ ...state, isLoading: true, query: action.query })),
  on(SearchActions.searchShowsSuccess, (state, action) => ({
    ...state,
    isLoading: false,
    shows: action.shows,
  })),
  on(SearchActions.searchShowsFailure, (state, action) => ({
    ...state,
    isLoading: false,
    error: action.error,
  })),
);