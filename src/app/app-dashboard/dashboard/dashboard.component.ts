import { Component, OnInit, OnDestroy } from '@angular/core';
import { GetDataService } from '../data-service/get-data.service';
import { App } from '../../mock-schemas/app';
import { TokenizingService } from '../token-service/tokenizing.service';
import { Theme } from '../../mock-schemas/theme';
import { ThemeDataService } from '../../shared-services/theme-data/theme-data.service';
import { ISubscriptions } from '../../interfaces';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {
  private subscribitions: ISubscriptions = {
    first: null,
    second: null
  };
  public apps: App[];
  public themeData: Theme;
  constructor(private data: GetDataService,
              private token: TokenizingService,
              private theme: ThemeDataService) { }
  ngOnInit() {
    this.subscribitions.first = this.data.getData().subscribe((apps: App[]) => {
      this.apps = apps;
    });
    this.subscribitions.second = this.theme.getThemeObservableData().subscribe((themeData: Theme) => {
      this.themeData = themeData;
    });
    this.token.tokenCheck();
  }
  ngOnDestroy() {
    this.subscribitions.first.unsubscribe();
    this.subscribitions.second.unsubscribe();
  }
}
