import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { CLIENT_ID, REDIRECT_URI } from '../constants';
import {Observable} from 'rxjs';
import {User} from './user';
import {USERINFO} from './user-info';
import {APPS} from './apps';
import {GetDataService} from './get-data.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  logIn(): void {
    window.location.href =
      `https://api.instagram.com/oauth/authorize/?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=token`;
  }
  getToken(): Observable<string> {
    return this.route.fragment;
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
  setUserData(userData): void {
    USERINFO.username = userData.data.username;
    USERINFO.logo = userData.data.profile_picture;
    USERINFO.id = parseInt(userData.data.id, 10);
    console.log(userData);
    if (USERINFO.id === 4165236905) {
      USERINFO.rights = 'admin';
    } else {
      USERINFO.rights = 'logged';
    }
  }
  appsInfoCheck(): void {
    if (!APPS.length) {
      this.data.fetchInfo().subscribe((res) => {
        APPS.push(...res);
      });
    }
  }
  localTokenFetch(): void {
    const token = this.getLocalToken();
    console.log(token);
    this.getUserData(token).subscribe(userData => {
      this.setUserData(userData);
      console.log('local storage');
    });
  }
  remoteTokenFetch(): void {
    this.getToken().subscribe(token => {
      if (token) {
        token = token.slice(13, token.length);
        this.getUserData(token).subscribe(userData => {
          this.setUserData(userData);
          console.log('fetching');
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
  checkRights(): string {
    if (USERINFO.rights) {
      if (USERINFO.rights === 'admin') {
        return 'admin';
      } else {
        return 'logged';
      }
    } else {
      return 'non-logged';
    }
  }
  constructor(private http: HttpClient,
              private router: Router,
              private route: ActivatedRoute,
              private data: GetDataService) { }
}
