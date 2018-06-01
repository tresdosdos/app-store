import { Component, OnInit } from '@angular/core';
import {GetDataService} from '../../services/get-data.service';
import {App} from '../../services/app';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  private apps: App[];
  public getInfo(): App[] {
    return this.apps;
  }
  public setInfo(newInfo): void {
    this.apps = newInfo;
  }
  constructor(private data: GetDataService) { }

  ngOnInit() {
    this.data.getInfo().subscribe((info) => {
      this.setInfo(info);
      console.log(this.getInfo());
    });
  }

}
