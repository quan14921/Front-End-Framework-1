import { Injectable } from '@angular/core';
import mockData from 'src/data';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Usertype } from '../models/User';


const urlAPI  = 'http://localhost:3001/'
@Injectable({
    providedIn:'root'
})
 export class UserService {

     constructor(private http: HttpClient) { }

    singup(user: any) {
    console.log(user);
        
    return this.http.post(`${urlAPI}/signup`, user);
      }

    signIn(user:any) {
        return this.http.post(`${urlAPI}/signin`,user);
    }
 }