import { Injectable } from '@angular/core';
import {ADMINS, CLIENT_ID, REDIRECT_URI, RIGHTS} from '../../constants';
import { USERINFO } from '../../user-info';
import { LoginData } from '../../mock-schemas/loginData';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  logIn(): void {
    document.location.href =
      `https://api.instagram.com/oauth/authorize/?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;
  }
  setUserData(userData: LoginData): void {
    USERINFO.username = userData.username;
    USERINFO.logo = userData.profile_picture;
    USERINFO.id = parseInt(userData.id, 10);
    if (USERINFO.id === ADMINS.FIRST_ADMIN) {
      USERINFO.rights = RIGHTS.ADMIN;
    } else {
      USERINFO.rights = RIGHTS.LOGGED;
    }
  }
  checkRights(): string {
    if (USERINFO.rights) {
      if (USERINFO.rights === RIGHTS.ADMIN) {
        return RIGHTS.ADMIN;
      } else {
        return RIGHTS.LOGGED;
      }
    } else {
      return RIGHTS.NON_LOGGED;
    }
  }
  constructor() { }
}
