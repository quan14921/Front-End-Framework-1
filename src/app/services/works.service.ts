import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IWork } from "../models/works";


@Injectable({
    providedIn: 'root'
})
export class WorkService {
API_URL: string = 'http://localhost:3001/works';
API_LIMIT : string = 'http://localhost:3001/works?_limit=3'

  constructor(private http: HttpClient) { }

  getidWorks(id: number): Observable<IWork> {
    return this.http.get<IWork>(`${this.API_URL}/${id}`)
  }
  getWorks(): Observable<IWork[]> {
    return this.http.get<IWork[]>(this.API_URL)
  }
  getWolimit(): Observable<IWork[]> {
    return this.http.get<IWork[]>(this.API_LIMIT)
  }
  removeWorks(id: number): Observable<IWork> {
    return this.http.delete<IWork>(`${this.API_URL}/${id}`)
  }
  addWorks(work: any): Observable <IWork> {
    console.log(work);
    
    return this.http.post<IWork>(`${this.API_URL}`, work);
  }
  updateWorks(work: IWork) {
    return this.http.put<IWork>(`${this.API_URL}/${work.id}`, work);
  }
}