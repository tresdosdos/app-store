import { Component, OnInit } from '@angular/core';
import {App} from '../services/app';
import {GetDataService} from '../services/get-data.service';
import {APPS} from '../services/apps';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-search-dashboard',
  templateUrl: './search-dashboard.component.html',
  styleUrls: ['./search-dashboard.component.css']
})
export class SearchDashboardComponent implements OnInit {
  private id: string;
  private apps = APPS;
  public app: App[];
  public isReady: boolean;
  public error: string;
  constructor(private route: ActivatedRoute,
              private data: GetDataService) { }
  ngOnInit() {
    this.isReady = false;
    if (!APPS.length) {
      this.data.fetchInfo().subscribe((res) => {
        APPS.push(...res);
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
      });
    } else {
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
    }
  }
}
