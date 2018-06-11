import { Component, OnInit, OnDestroy } from '@angular/core';
import { App } from '../../mock-schemas/app';
import { GetDataService } from '../data-service/get-data.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-search-dashboard',
  templateUrl: './search-dashboard.component.html',
  styleUrls: ['./search-dashboard.component.css']
})
export class SearchDashboardComponent implements OnInit, OnDestroy {
  private id: string;
  private subscription: Subscription;
  private apps: App[];
  public foundedApps: App[];
  public error: string;
  constructor(private route: ActivatedRoute,
              private data: GetDataService) { }
  ngOnInit() {
    // TODO: flatMap
    this.data.getData().subscribe((apps: App[]) => {
      this.apps = apps;
        this.subscription = this.route.params.subscribe(params => {
          this.id = params['id'];
          this.foundedApps = this.data.findApps(this.apps, this.id);
          if (this.apps.length === 0) {
            this.error = 'There is no matches';
          } else {
            this.error = '';
          }
        });
    });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
