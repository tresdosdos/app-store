import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../auth-service/auth.service';
import { UserDataService } from '../../shared/user-data/user-data.service';
import { User } from '../../shared/mock-schemas/user';
import { Theme } from '../../shared/mock-schemas/theme';
import {ThemeDataService} from '../../shared/theme-data/theme-data.service';
import {Subscription} from 'rxjs';
import {ISubscriptions} from '../../shared/interfaces';

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
  public userData: User;
  public themeData: Theme;
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
    this.subscriptions.first = this.user.getUserObservableData().subscribe((userData: User) => {
      this.userData = userData;
    });
    this.subscriptions.second = this.theme.getThemeObservableData().subscribe((themeData: Theme) => {
      this.themeData = themeData;
    });
  }
  ngOnDestroy() {
    this.subscriptions.first.unsubscribe();
    this.subscriptions.second.unsubscribe();
  }
}
