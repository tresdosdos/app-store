import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { App } from './app';
import { APPS } from './apps';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {
  private info = APPS;
  getInfo(): Observable<App[]> {
    return this.http.get<App[]>('http://localhost:4200/assets/info.json');
  }
  constructor(private http: HttpClient) { }
}
