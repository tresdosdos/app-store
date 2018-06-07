import { Injectable } from '@angular/core';
import { USERINFO } from '../../user-info';
import { Observable } from 'rxjs';
import { AuthService } from '../../header/auth-service/auth.service';
import { HttpServiceService } from '../../shared-services/http-service/http-service.service';
import { ACCESS_TOKEN_URL } from '../../constants';

@Injectable({
  providedIn: 'root'
})
export class TokenizingService {
  remoteTokenFetch(): void {
    const code = this.getCode();
    if (code.length === 32) {
      this.HttpService.post('/gettoken', {code: code}).subscribe((res) => {
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
    return url.slice(url.indexOf('code') + 5, url.length - 2);
  }
  getUserData(token): Observable<any> {
    this.saveLocalToken(token);
    return this.HttpService.get(ACCESS_TOKEN_URL + token);
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
  constructor(private auth: AuthService,
              private HttpService: HttpServiceService) { }
}
