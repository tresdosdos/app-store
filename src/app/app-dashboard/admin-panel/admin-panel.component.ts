import { Component, OnInit } from '@angular/core';
import { USERINFO } from '../../user-info';
import { THEME } from '../../theme-info';
import { Router } from '@angular/router';
import {RIGHTS, THEMES, TOGGLE_BUTTONS} from '../../constants';

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
    if (THEME.color === THEMES.LIGHT) {
      THEME.color = THEMES.DARK;
    } else {
      THEME.color = THEMES.LIGHT;
    }
    this.toggling.toggleTheme = THEME.color;
  }
  toggleLogIn(): void {
      THEME.logIn = !THEME.logIn;
      if (this.toggling.toggleLogIn === TOGGLE_BUTTONS.OFF) {
        this.toggling.toggleLogIn = TOGGLE_BUTTONS.ON;
      } else {
        this.toggling.toggleLogIn = TOGGLE_BUTTONS.OFF;
      }
  }
  toggleCategories(): void {
    THEME.categories = !THEME.categories;
    if (this.toggling.toggleCategories === TOGGLE_BUTTONS.OFF) {
      this.toggling.toggleCategories = TOGGLE_BUTTONS.ON;
    } else {
      this.toggling.toggleCategories = TOGGLE_BUTTONS.OFF;
    }
  }
  ngOnInit() {
    this.toggling = {
      toggleTheme: THEMES.LIGHT,
      toggleCategories: TOGGLE_BUTTONS.OFF,
      toggleLogIn: TOGGLE_BUTTONS.OFF
    };
    if (this.userInfo.rights !== RIGHTS.ADMIN) {
      this.router.navigate(['/']);
    }
  }
}
