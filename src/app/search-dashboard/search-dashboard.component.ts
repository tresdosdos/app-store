import { Component, OnInit } from '@angular/core';
import { App } from '../services/app';
import { GetDataService } from '../services/get-data.service';
import { APPS } from '../services/apps';
import { ActivatedRoute } from '@angular/router';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-search-dashboard',
  templateUrl: './search-dashboard.component.html',
  styleUrls: ['./search-dashboard.component.css']
})
export class SearchDashboardComponent implements OnInit {
  private id: string;
  public app: App[];
  public isReady: boolean;
  public error: string;
  constructor(private route: ActivatedRoute,
              private data: GetDataService,
              private auth: AuthService) { }
  ngOnInit() {
    this.isReady = false;
    const func = () => {
      this.route.params.subscribe(params => {
        this.id = params['id'];
        this.app = this.data.findApps(this.id);
        console.log(this.app);
        if (this.app.length === 0) {
          this.error = 'There is no matches';
        } else {
          this.error = '';
        }
        this.isReady = true;
      });
    };
    this.auth.appsInfoCheck(func);
  }
}
