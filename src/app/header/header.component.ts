import { Component, OnInit } from '@angular/core';
import { THEME } from '../theme-info';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public theme = THEME;
  constructor() { }

  ngOnInit() {
  }

}
