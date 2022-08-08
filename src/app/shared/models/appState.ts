import { DetailState, ShowsState } from "./show";

export interface AppState {
  shows: ShowsState;
  saved: ShowsState;
  detail: DetailState;
}