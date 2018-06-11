import { Injectable } from '@angular/core';
import { USERINFO } from '../../user-info';
import { Observable } from 'rxjs';
import { AuthService } from '../../header/auth-service/auth.service';
import { HttpServiceService } from '../../shared-services/http-service/http-service.service';
import { ACCESS_TOKEN_URL, LOCALSTORAGE } from '../../constants';
import { ActivatedRoute, Params } from '@angular/router';
import { LoginData } from '../../mock-schemas/loginData';

@Injectable({
  providedIn: 'root'
})
export class TokenizingService {
  constructor(private auth: AuthService,
              private HttpService: HttpServiceService,
              private route: ActivatedRoute) { }
  remoteTokenFetch(): void {
    this.getCode().subscribe(
      (codeData: {code: number}) => {
      const code = codeData.code;
      if (code) {
        this.HttpService.post('/gettoken', {code: code}).subscribe(
          (tokenData: {
            access_token: string,
            user: LoginData
          }) => {
          this.saveLocalToken(tokenData.access_token);
          this.auth.setUserData(tokenData.user);
        });
      }
    });
  }
  deleteLocalToken(): void {
    localStorage.removeItem(LOCALSTORAGE.AUTH_TOKEN);
    USERINFO.username = '';
    USERINFO.id = null;
    USERINFO.logo = '';
  }
  localTokenFetch(): void {
    const token = this.getLocalToken();
    this.getUserData(token).subscribe(
      (userData: {
        data: LoginData,
        meta: {code: number}
      }) => {
      this.auth.setUserData(userData.data);
    });
  }
  getCode(): Observable<Params> {
    return this.route.queryParams;
  }
  getUserData(token: string): Observable<{data: LoginData, meta: {code: number}}> {
    this.saveLocalToken(token);
    return this.HttpService.get(ACCESS_TOKEN_URL + token);
  }
  saveLocalToken(token: string): void {
    localStorage.setItem(LOCALSTORAGE.AUTH_TOKEN, token);
  }
  getLocalToken(): string {
    return localStorage.getItem(LOCALSTORAGE.AUTH_TOKEN);
  }
  tokenCheck(): void {
    if (this.getLocalToken()) {
      this.localTokenFetch();
    } else {
      this.remoteTokenFetch();
    }
  }
}
