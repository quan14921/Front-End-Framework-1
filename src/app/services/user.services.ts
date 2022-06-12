import { Injectable } from '@angular/core';
import mockData from 'src/data';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Usertype } from '../models/User';



@Injectable({
    providedIn:'root'
})
 export class UserService {
API_URL: string = 'http://localhost:3001/users';
     constructor(private http: HttpClient) { }

      getUserss(): Observable<Usertype[]> {
        return this.http.get<Usertype[]>(this.API_URL)
      }
      updateUsers(posts: Usertype) {
        return this.http.put<Usertype>(`${this.API_URL}/${posts.id}`, posts);
      }
 }