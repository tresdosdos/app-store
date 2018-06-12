import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth-service/auth.service';
import { THEME } from '../../theme-info';
import {UserDataService} from '../../shared-services/user-data/user-data.service';
import {User} from '../../mock-schemas/user';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  public userData: User;
  public theme = THEME;
  public isMenuOpen: boolean;
  constructor(public auth: AuthService,
              private user: UserDataService) { }
  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
  ngOnInit() {
    this.isMenuOpen = false;
    this.user.getUserObservableData().subscribe((userData: User) => {
      this.userData = userData;
    });
  }

}
