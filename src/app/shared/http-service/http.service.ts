import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private http: HttpClient) { }
  get(url: string,
      myHeaders = {
    'Content-Type': 'application/json'
      }
      ): Observable<any> {
    const headers = new HttpHeaders();
    for (const key of Object.keys(myHeaders)) {
      for (const value of Object.values(myHeaders)) {
        headers.set(key, value);
      }
    }
    return this.http.get(url, {headers: headers});
  }
  post(url: string,
       data = {},
       myHeaders = {
         'Content-Type': 'application/json'
       },
  ): Observable<any> {
    const headers = new HttpHeaders();
    for (const key of Object.keys(myHeaders)) {
      for (const value of Object.values(myHeaders)) {
        headers.set(key, value);
      }
    }
    return this.http.post(url, data, {headers: headers});
  }
}
