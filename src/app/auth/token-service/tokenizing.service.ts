import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../auth-service/auth.service';
import { HttpService } from '../../shared/http-service/http.service';
import { ACCESS_TOKEN_URL } from '../../shared/constants';
import { LOCALSTORAGE } from '../../shared/enums';
import { ActivatedRoute } from '@angular/router';
import { UserDataService } from '../../shared/user-data/user-data.service';
import { ILoginData } from '../../shared/interfaces';

@Injectable({
  providedIn: 'root'
})
export class TokenizingService {
  private code: number;
  constructor(private auth: AuthService,
              private http: HttpService,
              private route: ActivatedRoute,
              private user: UserDataService) { }
  remoteTokenFetch(): void {
    const code = this.getCode();
      if (code) {
        this.http.post('/gettoken', {code: code}).subscribe(
          (tokenData: {
            access_token: string,
            user: ILoginData
          }) => {
          this.saveLocalToken(tokenData.access_token);
          this.auth.setUserData(tokenData.user);
        });
      }
  }
  deleteLocalToken(): void {
    localStorage.removeItem(LOCALSTORAGE.AUTH_TOKEN);
    this.user.setNullData();
  }
  localTokenFetch(): void {
    const token = this.getLocalToken();
    this.getUserData(token).subscribe(
      (userData: {
        data: ILoginData,
        meta: {code: number}
      }) => {
      this.auth.setUserData(userData.data);
    });
  }
  getCode(): number {
    if (!this.code) {
      this.route.queryParams.subscribe(params => {
        this.code = params.code;
      }).unsubscribe();
    }
    return this.code;
  }
  getUserData(token: string): Observable<{data: ILoginData, meta: {code: number}}> {
    this.saveLocalToken(token);
    return this.http.get(ACCESS_TOKEN_URL + token);
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
