import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environments';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NoticesService {
  private baseUrl = '';
  constructor(private httpClient: HttpClient) {
    this.baseUrl = environment.apiUrl;
   }

   getNotices():Observable<any>{
    return this.httpClient.get<any>(`${this.baseUrl}/notice/notices-categories`);
   }
   getCategoryNotices():Observable<any>{
    return this.httpClient.get<any>(`${this.baseUrl}/notice/categories`);
   }
   getNoticeById(id:string){
    return this.httpClient.get<any>(`${this.baseUrl}/notice/${id}`);

   }
}
