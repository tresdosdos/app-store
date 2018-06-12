import { Component, OnInit, OnDestroy } from '@angular/core';
import { App } from '../../mock-schemas/app';
import { GetDataService } from '../data-service/get-data.service';
import { ActivatedRoute } from '@angular/router';
import { ISubscriptions } from '../../interfaces';
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
  ngOnInit() {
    // TODO: flatMap
    this.token.tokenCheck();
    this.data.getData().subscribe((apps: App[]) => {
      this.apps = apps;
        this.subscriptions.first = this.route.params.subscribe(params => {
          this.id = params['id'];
          this.foundedApps = this.data.findApps(this.apps, this.id);
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
  }
}
