import { Component, OnInit } from '@angular/core';
import { THEME } from '../theme-info';
import { STATIC_PATH, IMAGES } from '../constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public theme = THEME;
  public logoUrl = STATIC_PATH + IMAGES.LOGO;
  constructor() { }

  ngOnInit() {
  }

}
