import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountService {
  private baseUrl = '/api';

  constructor(private http: HttpClient) {}

  getCount(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/count`);
  }

  incrementCount(): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/increment`, {});
  }
}
