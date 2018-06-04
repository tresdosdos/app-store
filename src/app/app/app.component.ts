import { Component, OnInit, Input } from '@angular/core';
import { App } from '../services/app';

@Component({
  selector: 'app-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @Input() app: App;
  constructor() { }

  ngOnInit() {
  }

}
