import { Injectable } from '@angular/core';
import { App } from '../../mock-schemas/app';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { HttpServiceService } from '../../shared-services/http-service/http-service.service';
import { CATEGORIES } from '../../constants';

@Injectable({
  providedIn: 'root'
})
// TODO: add permission categories to methods
export class GetDataService {
  private apps = new BehaviorSubject([]);
  public appData = this.apps.asObservable();
  constructor(private http: HttpServiceService,
              private router: Router) { }
  fetchInfo(): Observable<App[]> {
    return this.http.get('./assets/info.json');
  }
  getData(): Observable<App[]> {
    if (!this.apps.getValue().length) {
      this.fetchInfo().subscribe((apps: App[]) => {
        this.apps.next(apps);
      });
    }
    return this.appData;
  }
  filterData(category: string, info): App[] {
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
  // search by 2 fields in lowercase
  findApps(apps: App[], searchLine: string): App[] {
    return apps.filter((app: App) => {
      return app.app_name.toLocaleLowerCase().indexOf(searchLine.toLocaleLowerCase()) + 1
        || app.publisher_name.toLocaleLowerCase().indexOf(searchLine.toLocaleLowerCase()) + 1;
    });
  }
}
