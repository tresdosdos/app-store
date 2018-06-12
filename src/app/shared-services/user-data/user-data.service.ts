import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../../mock-schemas/user';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  private nullData = {
    username: '',
    logo: '',
    id: null,
    rights: ''
  };
  private user = new BehaviorSubject(this.nullData);
  public userData = this.user.asObservable();
  constructor() { }
  public getUserObservableData(): Observable<User> {
    return this.userData;
  }
  public getUserData(): User {
    return this.user.getValue();
  }
  public setUserData(userInfo: User): void {
    this.user.next(userInfo);
  }
  public setNullData(): void {
    this.user.next(this.nullData);
  }
}
