import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { GetDataService } from '../core/data-service/get-data.service';
import { TokenizingService } from '../auth/token-service/tokenizing.service';
import { ISubscriptions, IApp } from '../shared/interfaces';

@Component({
  selector: 'app-modal-window',
  templateUrl: './modal-window.component.html',
  styleUrls: ['./modal-window.component.css']
})
export class ModalWindowComponent implements OnInit, OnDestroy {
  private id: string;
  private subscriptions: ISubscriptions = {
    first: null
  };
  public app: IApp;
  constructor(private route: ActivatedRoute,
              private data: GetDataService,
              private token: TokenizingService) { }
  getApp(apps: IApp[]): any {
        return apps.find((app: IApp) => {
          return app.id === this.id;
        });
  }
  ngOnInit() {
    this.token.tokenCheck();
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
    }).unsubscribe();
    this.subscriptions.first = this.data.getData().subscribe((apps: IApp[]) => {
      this.app = this.getApp(apps);
      });
  }
  ngOnDestroy() {
    this.subscriptions.first.unsubscribe();
  }
}
