import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { App } from '../../mock-schemas/app';
import { AppsInfo } from '../../apps-info';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import {HttpServiceService} from '../../shared-services/http-service/http-service.service';


@Injectable({
  providedIn: 'root'
})
export class GetDataService {
  fetchInfo(): Observable<App[]> {
    return this.HttpService.get('./assets/info.json');
  }
  filterData(category, info): App[] {
    if (category) {
      switch (category) {
        case 'kids': {
          return info.filter((app) => {
            return app.content_rating === 6;
          });
        }
        case 'adults': {
          return info.filter((app) => {
            return app.content_rating === 18;
          });
        }
        case 'multiplayer': {
          return info.filter((app) => {
            return app.content_rating_info === 'Multiplayer';
          });
        }
        default: {
          this.router.navigate(['/']);
        }
      }
    }
  }
  // search by 2 fields in lowercase
  findApps(searchLine): App[] {
    return AppsInfo.filter((app) => {
      return app.app_name.toLocaleLowerCase().indexOf(searchLine.toLocaleLowerCase()) + 1
        || app.publisher_name.toLocaleLowerCase().indexOf(searchLine.toLocaleLowerCase()) + 1;
    });
  }
  appsInfoCheck(func = function () {
    return;
  }): void {
    if (!AppsInfo.length) {
      this.fetchInfo().subscribe((res) => {
        AppsInfo.push(...res);
        func();
      });
    } else {
      func();
    }
  }
  constructor(private HttpService: HttpServiceService,
              private router: Router) { }
}
