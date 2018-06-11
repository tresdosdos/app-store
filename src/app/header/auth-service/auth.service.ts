import { Injectable } from '@angular/core';
import { CLIENT_ID, REDIRECT_URI } from '../../constants';
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
    if (USERINFO.id === 4165236905) {
      USERINFO.rights = 'admin';
    } else {
      USERINFO.rights = 'logged';
    }
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
  constructor() { }
}
