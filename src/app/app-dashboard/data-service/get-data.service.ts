import { Injectable } from '@angular/core';
import { App } from '../../mock-schemas/app';
import { AppsInfo } from '../../apps-info';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { HttpServiceService } from '../../shared-services/http-service/http-service.service';
import {CATEGORIES} from '../../constants';


@Injectable({
  providedIn: 'root'
})
export class GetDataService {
  constructor(private HttpService: HttpServiceService,
              private router: Router) { }
  fetchInfo(): Observable<App[]> {
    return this.HttpService.get('./assets/info.json');
  }
  filterData(category: string, info): App[] {
    if (category) {
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
  // search by 2 fields in lowercase
  findApps(searchLine: string): App[] {
    return AppsInfo.filter((app: App) => {
      return app.app_name.toLocaleLowerCase().indexOf(searchLine.toLocaleLowerCase()) + 1
        || app.publisher_name.toLocaleLowerCase().indexOf(searchLine.toLocaleLowerCase()) + 1;
    });
  }
  appsInfoCheck(func = function () {
    return;
  }): void {
    if (!AppsInfo.length) {
      this.fetchInfo().subscribe((apps: App[]) => {
        AppsInfo.push(...apps);
        func();
      });
    } else {
      func();
    }
  }
}
