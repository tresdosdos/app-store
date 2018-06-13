import { Component, OnInit, OnDestroy } from '@angular/core';
import { GetDataService } from '../../core/data-service/get-data.service';
import { TokenizingService } from '../../auth/token-service/tokenizing.service';
import { ThemeDataService } from '../../shared/theme-data/theme-data.service';
import { ISubscriptions, IApp, ITheme } from '../../shared/interfaces';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {
  private subscriptions: ISubscriptions = {
    first: null,
    second: null
  };
  public apps: IApp[];
  public themeData: ITheme;
  constructor(private data: GetDataService,
              private token: TokenizingService,
              private theme: ThemeDataService) { }
  ngOnInit() {
    this.subscriptions.first = this.data.getData().subscribe((apps: IApp[]) => {
      this.apps = apps;
    });
    this.subscriptions.second = this.theme.getThemeObservableData().subscribe((themeData: ITheme) => {
      this.themeData = themeData;
    });
    this.token.tokenCheck();
  }
  ngOnDestroy() {
    this.subscriptions.first.unsubscribe();
    this.subscriptions.second.unsubscribe();
  }
}
