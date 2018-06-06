import { Injectable } from '@angular/core';
import {USERINFO} from './user-info';
import {Observable} from 'rxjs';
import {User} from './user';
import {HttpClient} from '@angular/common/http';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenizingService {
  remoteTokenFetch(): void {
    const code = this.getCode();
    if (code.length === 32) {
      fetch('/gettoken', {method: 'post', headers: {'Content-Type': 'application/json'
        }, body: JSON.stringify({code: code})}).then(res => res.json()).then(res => {
        this.saveLocalToken(res.access_token);
        this.auth.setUserData({data: res.user});
      });
    }
  }
  deleteLocalToken(): void {
    localStorage.removeItem('appStoreToken');
    USERINFO.username = '';
    USERINFO.id = null;
    USERINFO.logo = '';
  }
  localTokenFetch(): void {
    const token = this.getLocalToken();
    this.getUserData(token).subscribe(userData => {
      this.auth.setUserData(userData);
    });
  }
  getCode(): string {
    const url = window.location.href;
    const code = url.slice(url.indexOf('code') + 5, url.length - 2);
    return code;
  }
  getUserData(token): Observable<any> {
    this.saveLocalToken(token);
    return this.http.get<User>('https://api.instagram.com/v1/users/self/?access_token=' + token);
  }
  saveLocalToken(token): void {
    localStorage.setItem('appStoreToken', token);
  }
  getLocalToken(): string {
    return localStorage.getItem('appStoreToken');
  }
  tokenCheck(): void {
    if (this.getLocalToken()) {
      this.localTokenFetch();
    } else {
      this.remoteTokenFetch();
    }
  }
  constructor(private http: HttpClient,
              private auth: AuthService) { }
}
