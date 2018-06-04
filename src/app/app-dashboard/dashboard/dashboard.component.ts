import { Component, OnInit } from '@angular/core';
import {GetDataService} from '../../services/get-data.service';
import {App} from '../../services/app';
import { APPS } from '../../services/apps';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  private apps = APPS;
  public getInfo(): App[] {
    return this.apps;
  }
  public setInfo(newInfo): void {
    this.apps = newInfo;
  }
  constructor(private data: GetDataService) { }

  ngOnInit() {
    if (!APPS.length) {
      this.data.fetchInfo().subscribe((res) => {
        APPS.push(...res);
      });
    }
  }

}
