import { Component, OnInit } from '@angular/core';
import { App } from '../../mock-schemas/app';
import { ActivatedRoute } from '@angular/router';
import { AppsInfo } from '../../apps-info';
import {GetDataService} from '../data-service/get-data.service';
import {TokenizingService} from '../token-service/tokenizing.service';

@Component({
  selector: 'app-modal-window',
  templateUrl: './modal-window.component.html',
  styleUrls: ['./modal-window.component.css']
})
export class ModalWindowComponent implements OnInit {
  private id: string;
  private apps = AppsInfo;
  public app: App;
  public isReady: boolean;
  constructor(private route: ActivatedRoute,
              private data: GetDataService,
              private token: TokenizingService) { }
  getApp(): any {
        return this.apps.find((app: App) => {
          return app.id === this.id;
        });
  }
  ngOnInit() {
    this.isReady = false;
    this.token.tokenCheck();
    // TODO: need to fix nesting and duplicating
  if (!AppsInfo.length) {
    this.data.fetchInfo().subscribe((apps: App[]) => {
      AppsInfo.push(...apps);
    this.route.params.subscribe(params => {
      this.id = params['id'];
        this.app = this.getApp();
        this.isReady = true;
    }).unsubscribe();
    });
  } else {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.app = this.getApp();
      this.isReady = true;
    }).unsubscribe();
  }
}}
