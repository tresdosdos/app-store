import { Injectable } from '@angular/core';
import { USERINFO } from '../../user-info';
import { Observable } from 'rxjs';
import { AuthService } from '../../header/auth-service/auth.service';
import { HttpServiceService } from '../../shared-services/http-service/http-service.service';
import { ACCESS_TOKEN_URL } from '../../constants';
import { ActivatedRoute, Params } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TokenizingService {
  remoteTokenFetch(): void {
    this.getCode().subscribe(codeData => {
      const code = codeData.code;
      if (code) {
        this.HttpService.post('/gettoken', {code: code}).subscribe((tokenData) => {
          this.saveLocalToken(tokenData.access_token);
          this.auth.setUserData({data: tokenData.user});
        });
      }
    });
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
  getCode(): Observable<Params> {
    return this.route.queryParams;
  }
  getUserData(token: string): Observable<Response> {
    this.saveLocalToken(token);
    return this.HttpService.get(ACCESS_TOKEN_URL + token);
  }
  saveLocalToken(token: string): void {
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
              private HttpService: HttpServiceService,
              private route: ActivatedRoute) { }
}
