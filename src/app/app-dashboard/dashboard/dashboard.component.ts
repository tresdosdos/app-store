import { Component, OnInit } from '@angular/core';
import {GetDataService} from '../../services/get-data.service';
import {App} from '../../services/app';
import { APPS } from '../../services/apps';
import {AuthService} from '../../services/auth.service';
import { USERINFO } from '../../services/user-info';
import {User} from '../../services/user';

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
  constructor(private data: GetDataService,
              private auth: AuthService) { }

  ngOnInit() {
    if (!APPS.length) {
      this.data.fetchInfo().subscribe((res) => {
        APPS.push(...res);
      });
      this.auth.getUserData().subscribe(res => {
        console.log(res);
        const user = new User();
        USERINFO.username = res.data.username;
        USERINFO.logo = res.data.profile_picture;
        USERINFO.id = parseInt(res.data.id, 10);
        console.log(USERINFO);
      });
    }
  }

}
