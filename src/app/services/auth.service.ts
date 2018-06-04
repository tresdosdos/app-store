import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import { CLIENT_ID, REDIRECT_URI } from '../constants';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  logIn(): void {
    window.location.href =
      `https://api.instagram.com/oauth/authorize/?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=token`;
  }
  getUserData(): Observable<any> {
    let token = this.route.fragment._value;
    token = token.slice(13, token.length);
    console.log(token);
    return this.http.get('https://api.instagram.com/v1/users/self/?access_token=' + token);
  }
  constructor(private http: HttpClient,
              private router: Router,
              private route: ActivatedRoute) { }
}
