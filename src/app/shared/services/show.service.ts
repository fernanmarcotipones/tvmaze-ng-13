import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Show } from "../models/show";

@Injectable()
export class ShowService {

  constructor(private httpClient: HttpClient) {}

  public getShows(): Observable<Show[]> {
    return this.httpClient.get<Show[]>("https://api.tvmaze.com/search/shows?q=a");
  }

  public searchShows(query: string): Observable<Show[]> {
    return this.httpClient.get<Show[]>(`https://api.tvmaze.com/search/shows?q=${query}`);
  }
}