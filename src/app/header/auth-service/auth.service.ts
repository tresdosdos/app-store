import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { CLIENT_ID, REDIRECT_URI } from '../../constants';
import { USERINFO } from '../../user-info';
import { AppsInfo } from '../../apps-info';
import { GetDataService } from '../../app-dashboard/data-service/get-data.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  logIn(): void {
    window.location.href =
      `https://api.instagram.com/oauth/authorize/?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;
  }
  setUserData(userData): void {
    USERINFO.username = userData.data.username;
    USERINFO.logo = userData.data.profile_picture;
    USERINFO.id = parseInt(userData.data.id, 10);
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
