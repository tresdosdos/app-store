import { Component, OnInit } from '@angular/core';
import { App } from '../../mock-schemas/app';
import { ActivatedRoute } from '@angular/router';
import { GetDataService } from '../data-service/get-data.service';
import { TokenizingService } from '../token-service/tokenizing.service';

@Component({
  selector: 'app-modal-window',
  templateUrl: './modal-window.component.html',
  styleUrls: ['./modal-window.component.css']
})
export class ModalWindowComponent implements OnInit {
  private id: string;
  private apps: App[];
  public app: App;
  constructor(private route: ActivatedRoute,
              private data: GetDataService,
              private token: TokenizingService) { }
  getApp(): any {
        return this.apps.find((app: App) => {
          return app.id === this.id;
        });
  }
  ngOnInit() {
    this.token.tokenCheck();
    // TODO: flatMap
    this.data.getData().subscribe((apps: App[]) => {
      this.apps = apps;
      this.route.params.subscribe(params => {
            this.id = params['id'];
              this.app = this.getApp();
          }).unsubscribe();
    });
}}
