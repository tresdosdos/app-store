import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
  get(url,
      myHeaders = [
        'Content-Type',
        'application/json'
      ]
      ): Observable<any> {
    const headers = new HttpHeaders();
    headers.set(myHeaders[0], myHeaders[1]);
    return this.http.get(url, {headers: headers});
  }
  post(url,
       data = {},
       myHeaders = [
         'Content-Type',
         'application/json'
       ],
  ): Observable<any> {
    const headers = new HttpHeaders();
    headers.set(myHeaders[0], myHeaders[1]);
    return this.http.post(url, data, {headers: headers});
  }
  constructor(private http: HttpClient) { }
}
