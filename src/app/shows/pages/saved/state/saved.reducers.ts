import { createReducer, on } from "@ngrx/store";
import { SavedState } from "src/app/shared/models/show";
import * as SavedActions from './saved.actions';

export const savedInitialState: SavedState = {
  isLoading: false,
  shows: [],
  results: [],
  error: null,
  query: null,
};

export const savedReducers = createReducer(
  savedInitialState,
  // Search
  on(SavedActions.searchSavedRequest, (state, { query }) => ({
    ...state,
    query,
    results: state.shows
      .filter(item => item.show?.name?.toUpperCase()
      .includes(query ? query.toUpperCase() : '')),
  })),
  // Add
  on(SavedActions.addSavedRequest, (state, { show }) => ({
    ...state,
    shows: [...state.shows, show],
    results: [...state.shows, show],
  })),
  // Remove
  on(SavedActions.removeSavedRequest, (state, { id }) => ({
    ...state,
    shows: state.shows.filter(item => item.show?.id !== id),
    results: state.shows.filter(item => item.show?.id !== id),
    query: '',
  })),
);