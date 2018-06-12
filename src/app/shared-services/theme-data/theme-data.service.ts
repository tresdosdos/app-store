import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Theme} from '../../mock-schemas/theme';

@Injectable({
  providedIn: 'root'
})
export class ThemeDataService {
  private startData = {
    color: 'light',
    categories: true,
    logIn: true
  };
  private theme = new BehaviorSubject(this.startData);
  private themeData = this.theme.asObservable();
  public getThemeObservableData(): Observable<Theme> {
    return this.themeData;
  }
  public getThemeData(): Theme {
    return this.theme.getValue();
  }
  public setThemeData(themeData: any): void {
    this.theme.next({
      color: themeData.color,
      categories: themeData.categories,
      logIn: themeData.logIn
    });
  }
  constructor() { }
}
