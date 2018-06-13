import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ITheme } from '../interfaces';

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
  constructor() { }
  public getThemeObservableData(): Observable<ITheme> {
    return this.themeData;
  }
  public getThemeData(): ITheme {
    return this.theme.getValue();
  }
  public setThemeData(themeData: any): void {
    this.theme.next({
      color: themeData.color,
      categories: themeData.categories,
      logIn: themeData.logIn
    });
  }
}
