import { Injectable } from '@angular/core';
import mockData from 'src/data';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { IProduct } from '../models/posts';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  API_URL: string = 'http://localhost:3001/posts';
  API_LIMIT : string = 'http://localhost:3001/posts?_limit=2'

  constructor(private http: HttpClient) { }

  getidPosts(id: number): Observable<IProduct> {
    return this.http.get<IProduct>(`${this.API_URL}/${id}`)
  }
  getPosts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.API_URL)
  }
  getPolimit(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.API_LIMIT)
  }
  removePosts(id: number): Observable<IProduct> {
    return this.http.delete<IProduct>(`${this.API_URL}/${id}`)
  }
  addPosts(posts: any): Observable <IProduct> {
    console.log(posts);
    
    return this.http.post<IProduct>(`${this.API_URL}`, posts);
  }
  updatePosts(posts: IProduct) {
    return this.http.put<IProduct>(`${this.API_URL}/${posts.id}`, posts);
  }
}
/**
 * 1. Import module "HttpClientModule" vào file app.module.ts
 * 2. Import service "HttpClient" vào product.service.ts
 * 3. Inject service http vào product service
 * 4 npx json-server-auth --watch db.json --port 3001 
 */