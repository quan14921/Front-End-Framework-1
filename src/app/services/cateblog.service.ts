import { Injectable } from '@angular/core';
import mockData from 'src/data';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { ICatePosst } from '../models/categoriesPosts';

@Injectable({
  providedIn: 'root'
})
export class CatepostsService {
  API_URL: string = 'http://localhost:3001/categoryPostId';

  constructor(private http: HttpClient) { }

  getidPosts(id: number): Observable<ICatePosst> {
    return this.http.get<ICatePosst>(`${this.API_URL}/${id}`)
  }
  getPosts(): Observable<ICatePosst[]> {
    return this.http.get<ICatePosst[]>(this.API_URL)
  }
  removePosts(id: number): Observable<ICatePosst> {
    return this.http.delete<ICatePosst>(`${this.API_URL}/${id}`)
  }
  addPosts(cateposts: any): Observable <ICatePosst> {
    console.log(cateposts);
    
    return this.http.post<ICatePosst>(`${this.API_URL}`, cateposts);
  }
  updatePosts(cateposts: ICatePosst) {
    return this.http.put<ICatePosst>(`${this.API_URL}/${cateposts.id}`, cateposts);
  }
}
/**
 * 1. Import module "HttpClientModule" vào file app.module.ts
 * 2. Import service "HttpClient" vào product.service.ts
 * 3. Inject service http vào product service
 * 4 npx json-server-auth --watch db.json --port 3001 
 */