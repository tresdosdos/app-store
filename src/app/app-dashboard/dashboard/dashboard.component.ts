import { Component, OnInit } from '@angular/core';
import {GetDataService} from '../../services/get-data.service';
import {App} from '../../services/app';
import { APPS } from '../../services/apps';
import {AuthService} from '../../services/auth.service';
import {THEME} from '../../services/theme-info';
import {TokenizingService} from '../../services/tokenizing.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  private apps = APPS;
  public theme = THEME;
  public getInfo(): App[] {
    return this.apps;
  }
  constructor(private data: GetDataService,
              private auth: AuthService,
              private token: TokenizingService) { }
  ngOnInit() {
    this.auth.appsInfoCheck();
    this.token.tokenCheck();
  }
}
