import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { App } from './app';
import { APPS } from './apps';
import {Observable} from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class GetDataService {
  // TODO: subject behaviour
  fetchInfo(): Observable<App[]> {
    return this.http.get<App[]>('./assets/info.json');
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
    return APPS.filter((app) => {
      return app.app_name.toLocaleLowerCase().indexOf(searchLine.toLocaleLowerCase()) + 1
        || app.publisher_name.toLocaleLowerCase().indexOf(searchLine.toLocaleLowerCase()) + 1;
    });
  }
  constructor(private http: HttpClient,
              private router: Router) { }
}
