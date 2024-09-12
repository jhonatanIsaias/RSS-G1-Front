import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environments';
import { Observable, ObservedValueOf } from 'rxjs';
import Login from '../models/loginModel';
@Injectable({
  providedIn: 'root'
})
export class FormLoginService {

  private token:string | any ;
  private baseUrl = '';

  constructor(private httpClient: HttpClient) {
    this.baseUrl = environment.apiUrl;
   }



  login(loginAuth: Login): Observable<string>{


   const authJson =  JSON.stringify(loginAuth);
   console.log(authJson);
   const headers = { 'Content-Type': 'application/json' };
   this.token =  this.httpClient.post(`${this.baseUrl}/auth/login`,authJson, {headers, responseType: 'text'});
   return this.token;
  }

}

