import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { HttpService } from '../../shared/http-service/http.service';
import { CATEGORIES } from '../../shared/constants';
import { IApp } from '../../shared/interfaces';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {
  private apps = new BehaviorSubject([]);
  public appData = this.apps.asObservable();
  constructor(private http: HttpService,
              private router: Router) { }
  private fetchInfo(): Observable<IApp[]> {
    return this.http.get('./assets/info.json');
  }
  public getData(): Observable<IApp[]> {
    if (!this.apps.getValue().length) {
      this.fetchInfo().subscribe((apps: IApp[]) => {
        this.apps.next(apps);
      });
    }
    return this.appData;
  }
  public filterData(category: string, info): IApp[] {
      switch (category) {
        case CATEGORIES.KIDS.ID: {
          return info.filter((app) => {
            return app.content_rating === CATEGORIES.KIDS.PARAM;
          });
        }
        case CATEGORIES.ADULTS.ID: {
          return info.filter((app) => {
            return app.content_rating === CATEGORIES.ADULTS.PARAM;
          });
        }
        case CATEGORIES.MULTIPLAYER.ID: {
          return info.filter((app) => {
            return app.content_rating_info === CATEGORIES.MULTIPLAYER.PARAM;
          });
        }
        default: {
          this.router.navigate(['/']);
        }
      }
  }
}
