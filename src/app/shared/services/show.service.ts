import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Show, ShowDetails } from "../models/show";

@Injectable()
export class ShowService {

  constructor(private httpClient: HttpClient) {}

  public getShow(id: number): Observable<ShowDetails> {
    return this.httpClient.get<ShowDetails>(`https://api.tvmaze.com/shows/${id}`);
  }

  public searchShows(query: string): Observable<Show[]> {
    return this.httpClient.get<Show[]>(`https://api.tvmaze.com/search/shows?q=${query}`);
  }
}