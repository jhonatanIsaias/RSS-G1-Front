import { Injectable } from '@angular/core';
import { environment } from '../environments/environments';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import User from '../models/userModel';
@Injectable({
  providedIn: 'root'
})
export class FormRegisterService {
  private baseUrl = '';
  private userResponse: User|any ;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = environment.apiUrl;
   }

  registerUser(user:User): Observable<User>{
    const userJson = JSON.stringify(user);
    const headers = { 'Content-Type': 'application/json' };
    this.userResponse =  this.httpClient.post<User>(`${this.baseUrl}/user`,userJson, {headers});
    return this.userResponse;
  }
}
