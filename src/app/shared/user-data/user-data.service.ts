import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IUser } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  private startData = {
    username: '',
    logo: '',
    id: null,
    rights: ''
  };
  private user = new BehaviorSubject(this.startData);
  private userData = this.user.asObservable();
  constructor() { }
  public getUserObservableData(): Observable<IUser> {
    return this.userData;
  }
  public getUserData(): IUser {
    return this.user.getValue();
  }
  public setUserData(userInfo: IUser): void {
    this.user.next(userInfo);
  }
  public setNullData(): void {
    this.user.next(this.startData);
  }
}
