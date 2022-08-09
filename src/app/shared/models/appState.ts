import { DetailState, SavedState, ShowsState } from "./show";

export interface AppState {
  shows: ShowsState;
  saved: SavedState;
  detail: DetailState;
}