import { Component, OnInit } from '@angular/core';
import { App } from '../../mock-schemas/app';
import { GetDataService } from '../data-service/get-data.service';
import { ActivatedRoute } from '@angular/router';

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
              private data: GetDataService) { }
  ngOnInit() {
    this.isReady = false;
    const func = () => {
      this.route.params.subscribe(params => {
        this.id = params['id'];
        this.app = this.data.findApps(this.id);
        if (this.app.length === 0) {
          this.error = 'There is no matches';
        } else {
          this.error = '';
        }
        this.isReady = true;
      });
    };
    this.data.appsInfoCheck(func);
  }
}
