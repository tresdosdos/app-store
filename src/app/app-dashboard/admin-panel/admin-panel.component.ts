import { Component, OnInit } from '@angular/core';
import { THEME } from '../../theme-info';
import { Router } from '@angular/router';
import { RIGHTS, THEMES, TOGGLE_BUTTONS } from '../../constants';
import {UserDataService} from '../../shared-services/user-data/user-data.service';
import {User} from '../../mock-schemas/user';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {
  public userInfo: User;
  public toggling: {
    toggleCategories: string;
    toggleLogIn: string;
    toggleTheme: string;
  };
  constructor(private router: Router,
              private user: UserDataService) { }
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
    this.user.getUserObservableData().subscribe((userData: User) => {
      this.userInfo = userData;
      if (this.userInfo.rights !== RIGHTS.ADMIN) {
        this.router.navigate(['/']);
      }
    }).unsubscribe();
  }
}
