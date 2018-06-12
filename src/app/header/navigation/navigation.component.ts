import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../auth-service/auth.service';
import { UserDataService } from '../../shared-services/user-data/user-data.service';
import { User } from '../../mock-schemas/user';
import { Theme } from '../../mock-schemas/theme';
import {ThemeDataService} from '../../shared-services/theme-data/theme-data.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit, OnDestroy {
  private firstSubscription: Subscription;
  private secondSubscription: Subscription;
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
    this.firstSubscription = this.user.getUserObservableData().subscribe((userData: User) => {
      this.userData = userData;
    });
    this.secondSubscription = this.theme.getThemeObservableData().subscribe((themeData: Theme) => {
      this.themeData = themeData;
    });
  }
  ngOnDestroy() {
    this.firstSubscription.unsubscribe();
    this.secondSubscription.unsubscribe();
  }
}
