import { Component, OnInit, OnDestroy } from '@angular/core';
import { GetDataService } from '../data-service/get-data.service';
import { App } from '../../mock-schemas/app';
import { TokenizingService } from '../token-service/tokenizing.service';
import { Subscription } from 'rxjs';
import {Theme} from '../../mock-schemas/theme';
import {ThemeDataService} from '../../shared-services/theme-data/theme-data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {
  private firstSubscription: Subscription;
  private secondSubscription: Subscription;
  public apps: App[];
  public themeData: Theme;
  constructor(private data: GetDataService,
              private token: TokenizingService,
              private theme: ThemeDataService) { }
  ngOnInit() {
    this.firstSubscription = this.data.getData().subscribe((apps: App[]) => {
      this.apps = apps;
    });
    this.secondSubscription = this.theme.getThemeObservableData().subscribe((themeData: Theme) => {
      this.themeData = themeData;
    });
    this.token.tokenCheck();
  }
  ngOnDestroy() {
    this.firstSubscription.unsubscribe();
    this.secondSubscription.unsubscribe();
  }
}
