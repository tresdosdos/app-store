import { Component, OnInit, OnDestroy } from '@angular/core';
import { App } from '../../shared/mock-schemas/app';
import { GetDataService } from '../data-service/get-data.service';
import { ActivatedRoute } from '@angular/router';
import { ISubscriptions } from '../../shared/interfaces';
import {TokenizingService} from '../token-service/tokenizing.service';

@Component({
  selector: 'app-search-dashboard',
  templateUrl: './search-dashboard.component.html',
  styleUrls: ['./search-dashboard.component.css']
})
export class SearchDashboardComponent implements OnInit, OnDestroy {
  private id: string;
  private subscriptions: ISubscriptions = {
    first: null
  };
  private apps: App[];
  public foundedApps: App[];
  public error: string;
  constructor(private route: ActivatedRoute,
              private data: GetDataService,
              private token: TokenizingService) { }
  // search by 2 fields in lowercase
  findApps(searchLine: string): App[] {
    return this.apps.filter((app: App) => {
      return app.app_name.toLocaleLowerCase().indexOf(searchLine.toLocaleLowerCase()) + 1
        || app.publisher_name.toLocaleLowerCase().indexOf(searchLine.toLocaleLowerCase()) + 1;
    });
  }
  ngOnInit() {
    this.token.tokenCheck();
    this.subscriptions.first = this.data.getData().subscribe((apps: App[]) => {
      this.apps = apps;
        this.subscriptions.second = this.route.params.subscribe(params => {
          this.id = params['id'];
          this.foundedApps = this.findApps(this.id);
          if (this.foundedApps.length === 0) {
            this.error = 'There is no matches';
          } else {
            this.error = '';
          }
        });
    });
  }
  ngOnDestroy() {
    this.subscriptions.first.unsubscribe();
    this.subscriptions.second.unsubscribe();
  }
}
