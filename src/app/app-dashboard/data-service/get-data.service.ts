import { Injectable } from '@angular/core';
import { App } from '../../shared/mock-schemas/app';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { HttpServiceService } from '../../shared/http-service/http-service.service';
import { CATEGORIES } from '../../shared/constants';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {
  private apps = new BehaviorSubject([]);
  public appData = this.apps.asObservable();
  constructor(private http: HttpServiceService,
              private router: Router) { }
  private fetchInfo(): Observable<App[]> {
    return this.http.get('./assets/info.json');
  }
  public getData(): Observable<App[]> {
    if (!this.apps.getValue().length) {
      this.fetchInfo().subscribe((apps: App[]) => {
        this.apps.next(apps);
      });
    }
    return this.appData;
  }
  public filterData(category: string, info): App[] {
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
