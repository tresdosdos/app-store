import { Component, OnInit } from '@angular/core';
import { App } from '../services/app';
import { ActivatedRoute } from '@angular/router';
import { APPS } from '../services/apps';
import {GetDataService} from '../services/get-data.service';

@Component({
  selector: 'app-modal-window',
  templateUrl: './modal-window.component.html',
  styleUrls: ['./modal-window.component.css']
})
export class ModalWindowComponent implements OnInit {
  private id: string;
  private apps = APPS;
  public app: App;
  public isReady: boolean;
  constructor(private route: ActivatedRoute,
              private data: GetDataService) { }
  getApp(): any {
        return this.apps.filter((app) => {
          return app.id === this.id;
        })[0];
  }
  ngOnInit() {
    this.isReady = false;
  if (!APPS.length) {
    this.data.fetchInfo().subscribe((res) => {
      APPS.push(...res);
    this.route.params.subscribe(params => {
      this.id = params['id'];
        this.app = this.getApp();
        console.log(this.app);
        this.isReady = true;
    });
    });
  } else {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.app = this.getApp();
      this.isReady = true;
    });
  }
}}
