import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {USERINFO} from '../../services/user-info';
import {THEME} from '../../services/theme-info';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  public userInfo = USERINFO;
  public theme = THEME;
  isMenuOpen: boolean;
  constructor(public auth: AuthService) { }
  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
  ngOnInit() {
    this.isMenuOpen = false;
  }

}
