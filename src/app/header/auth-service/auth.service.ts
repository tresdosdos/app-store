import { Injectable } from '@angular/core';
import { ADMINS, CLIENT_ID, REDIRECT_URI, RIGHTS } from '../../shared/constants';
import { UserDataService } from '../../shared/user-data/user-data.service';
import { ILoginData } from '../../shared/interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private user: UserDataService) { }
  logIn(): void {
    document.location.href =
      `https://api.instagram.com/oauth/authorize/?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;
  }
  setUserData(loginData: ILoginData): void {
    if (loginData) {
      const userId = parseInt(loginData.id, 10);
      const userData = {
        username: loginData.username,
        logo: loginData.profile_picture,
        id: userId,
        // Here i can use loop for admin check, but not need at this moment
        rights: userId === ADMINS.FIRST_ADMIN ? RIGHTS.ADMIN : RIGHTS.LOGGED
      };
      this.user.setUserData(userData);
    }
  }
  checkRights(): string {
    const userData = this.user.getUserData();
    if (userData.rights) {
      if (userData.rights === RIGHTS.ADMIN) {
        return RIGHTS.ADMIN;
      } else {
        return RIGHTS.LOGGED;
      }
    } else {
      return RIGHTS.NON_LOGGED;
    }
  }
}
