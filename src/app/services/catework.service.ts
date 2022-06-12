import { Injectable } from '@angular/core';
import mockData from 'src/data';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { ICateWork } from '../models/categoriesProjects';

@Injectable({
  providedIn: 'root'
})
export class CateWorkService {
  API_URL: string = 'http://localhost:3001/categoryWorkId';

  constructor(private http: HttpClient) { }

  getidPosts(id: number): Observable<ICateWork> {
    return this.http.get<ICateWork>(`${this.API_URL}/${id}`)
  }
  getPosts(): Observable<ICateWork[]> {
    return this.http.get<ICateWork[]>(this.API_URL)
  }
  removePosts(id: number): Observable<ICateWork> {
    return this.http.delete<ICateWork>(`${this.API_URL}/${id}`)
  }
  addPosts(catework: any): Observable <ICateWork> {
    console.log(catework);
    
    return this.http.post<ICateWork>(`${this.API_URL}`, catework);
  }
  updatePosts(catework: ICateWork) {
    return this.http.put<ICateWork>(`${this.API_URL}/${catework.id}`, catework);
  }
}
/**
 * 1. Import module "HttpClientModule" vào file app.module.ts
 * 2. Import service "HttpClient" vào product.service.ts
 * 3. Inject service http vào product service
 * 4 npx json-server-auth --watch db.json --port 3001 
 */