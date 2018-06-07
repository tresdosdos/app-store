import { Component, OnInit } from '@angular/core';
import { USERINFO } from '../../user-info';
import { THEME } from '../../theme-info';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {
  public userInfo = USERINFO;
  public toggling: {
    toggleCategories: string;
    toggleLogIn: string;
    toggleTheme: string;
  };
  constructor(private router: Router) { }
  toggleThemeColor(): void {
    if (THEME.color === 'light') {
      THEME.color = 'dark';
    } else {
      THEME.color = 'light';
    }
    this.toggling.toggleTheme = THEME.color;
  }
  toggleButton(button): void {
    if (button === 'categories') {
      THEME.categories = !THEME.categories;
      if (this.toggling.toggleCategories === 'off') {
        this.toggling.toggleCategories = 'on';
      } else {
        this.toggling.toggleCategories = 'off';
      }
    }
    if (button === 'logIn') {
      THEME.logIn = !THEME.logIn;
      if (this.toggling.toggleLogIn === 'off') {
        this.toggling.toggleLogIn = 'on';
      } else {
        this.toggling.toggleLogIn = 'off';
      }
    }
  }
  ngOnInit() {
    this.toggling = {
      toggleTheme: 'light',
      toggleCategories: 'off',
      toggleLogIn: 'off'
    };
    if (this.userInfo.rights !== 'admin') {
      this.router.navigate(['/']);
    }
  }
}
