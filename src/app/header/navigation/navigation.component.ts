import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../../auth/auth-service/auth.service';
import { UserDataService } from '../../shared/user-data/user-data.service';
import { ThemeDataService } from '../../shared/theme-data/theme-data.service';
import { ISubscriptions, ITheme, IUser } from '../../shared/interfaces';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit, OnDestroy {
  private  subscriptions: ISubscriptions = {
    first: null,
    second: null
  };
  public userData: IUser;
  public themeData: ITheme;
  public isMenuOpen: boolean;
  constructor(public auth: AuthService,
              private user: UserDataService,
              private theme: ThemeDataService) {
    this.isMenuOpen = false;
  }
  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
  ngOnInit() {
    this.subscriptions.first = this.user.getUserObservableData().subscribe((userData: IUser) => {
      this.userData = userData;
    });
    this.subscriptions.second = this.theme.getThemeObservableData().subscribe((themeData: ITheme) => {
      this.themeData = themeData;
    });
  }
  ngOnDestroy() {
    this.subscriptions.first.unsubscribe();
    this.subscriptions.second.unsubscribe();
  }
}
