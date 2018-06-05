import { Component, OnInit } from '@angular/core';
import {GetDataService} from '../services/get-data.service';
import {APPS} from '../services/apps';
import {ActivatedRoute} from '@angular/router';
import {THEME} from '../services/theme-info';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public theme = THEME;
  constructor(private data: GetDataService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    const token = this.route.snapshot.queryParams['access_token'];
    console.log(token);
  }

}
