import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../data-service/get-data.service';
import { App } from '../../mock-schemas/app';
import { AppsInfo } from '../../apps-info';
import { THEME } from '../../theme-info';
import { TokenizingService } from '../token-service/tokenizing.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  private apps = AppsInfo;
  public theme = THEME;
  constructor(private data: GetDataService,
              private token: TokenizingService) { }
  public getInfo(): App[] {
    return this.apps;
  }
  ngOnInit() {
    this.data.appsInfoCheck();
    this.token.tokenCheck();
  }
}
