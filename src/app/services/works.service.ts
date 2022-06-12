import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IWork } from "../models/works";


@Injectable({
    providedIn: 'root'
})
export class WorkService {
API_URL: string = 'http://localhost:3001/works';

  constructor(private http: HttpClient) { }

  getidWorks(id: number): Observable<IWork> {
    return this.http.get<IWork>(`${this.API_URL}/${id}`)
  }
  getWorks(): Observable<IWork[]> {
    return this.http.get<IWork[]>(this.API_URL)
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