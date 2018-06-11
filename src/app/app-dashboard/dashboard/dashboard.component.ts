import { Component, OnInit, OnDestroy } from '@angular/core';
import { GetDataService } from '../data-service/get-data.service';
import { App } from '../../mock-schemas/app';
import { THEME } from '../../theme-info';
import { TokenizingService } from '../token-service/tokenizing.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {
  private apps: App[];
  private subscription: Subscription;
  public theme = THEME;
  constructor(private data: GetDataService,
              private token: TokenizingService) { }
  public getInfo(): App[] {
    return this.apps;
  }
  ngOnInit() {
    this.subscription = this.data.getData().subscribe((apps: App[]) => {
      this.apps = apps;
    });
    this.token.tokenCheck();
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
