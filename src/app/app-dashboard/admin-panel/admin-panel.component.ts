import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RIGHTS, THEMES, TOGGLE_BUTTONS } from '../../constants';
import { UserDataService } from '../../shared-services/user-data/user-data.service';
import { User } from '../../mock-schemas/user';
import { ThemeDataService } from '../../shared-services/theme-data/theme-data.service';
import { ToggleButtons } from '../../interfaces';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {
  public userInfo: User;
  public toggling: ToggleButtons;
  constructor(private router: Router,
              private user: UserDataService,
              private theme: ThemeDataService) { }
  toggleThemeColor(): void {
    const currentTheme = this.theme.getThemeData();
    console.log(currentTheme);
    if (currentTheme.color === THEMES.LIGHT) {
      currentTheme.color = THEMES.DARK;
    } else {
      currentTheme.color = THEMES.LIGHT;
    }
    this.theme.setThemeData(currentTheme);
    console.log(currentTheme);
    this.toggling.theme = currentTheme.color;
  }
  toggleLogIn(): void {
    const currentTheme = this.theme.getThemeData();
    currentTheme.logIn = !currentTheme.logIn;
    this.theme.setThemeData(currentTheme);
      if (this.toggling.logIn === TOGGLE_BUTTONS.OFF) {
        this.toggling.logIn = TOGGLE_BUTTONS.ON;
      } else {
        this.toggling.logIn = TOGGLE_BUTTONS.OFF;
      }
  }
  toggleCategories(): void {
    const currentTheme = this.theme.getThemeData();
    currentTheme.categories = !currentTheme.categories;
    this.theme.setThemeData(currentTheme);
    if (this.toggling.categories === TOGGLE_BUTTONS.OFF) {
      this.toggling.categories = TOGGLE_BUTTONS.ON;
    } else {
      this.toggling.categories = TOGGLE_BUTTONS.OFF;
    }
  }
  ngOnInit() {
    this.toggling = {
      theme: THEMES.LIGHT,
      categories: TOGGLE_BUTTONS.OFF,
      logIn: TOGGLE_BUTTONS.OFF
    };
    this.user.getUserObservableData().subscribe((userData: User) => {
      this.userInfo = userData;
      if (this.userInfo.rights !== RIGHTS.ADMIN) {
        this.router.navigate(['/']);
      }
    });
  }
}
