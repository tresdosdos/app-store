import { Component, OnInit } from '@angular/core';
import { USERINFO } from '../services/user-info';
import { THEME } from '../services/theme-info';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {
  public userInfo = USERINFO;
  public toggleCategories: string;
  public toggleTheme: string;
  constructor(private router: Router) { }
  toggleThemeColor(): void {
    if (THEME.color === 'light') {
      THEME.color = 'dark';
      this.toggleTheme = 'on';
    } else {
      THEME.color = 'light';
      this.toggleTheme = 'off';
    }
  }
  toggleButton(button): void {
    if (button === 'categories') {
      THEME.categories = !THEME.categories;
      if (this.toggleCategories === 'off') {
        this.toggleCategories = 'on';
      } else {
        this.toggleCategories = 'off';
      }
    }
  }
  ngOnInit() {
    this.toggleTheme = 'off';
    this.toggleCategories = 'off';
    if (this.userInfo.rights !== 'admin') {
      this.router.navigate(['/']);
    }
  }

}
