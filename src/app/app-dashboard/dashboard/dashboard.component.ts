import { Component, OnInit } from '@angular/core';
import {GetDataService} from '../../services/get-data.service';
import {App} from '../../services/app';
import { APPS } from '../../services/apps';
import {AuthService} from '../../services/auth.service';
import {THEME} from '../../services/theme-info';

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
              private auth: AuthService) { }
  ngOnInit() {
    this.auth.appsInfoCheck();
    if (this.auth.getLocalToken()) {
      this.auth.localTokenFetch();
    } else {
      this.auth.remoteTokenFetch();
    }
  }
}
