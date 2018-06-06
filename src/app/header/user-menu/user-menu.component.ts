import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router';
import {TokenizingService} from '../../services/tokenizing.service';
import {AuthService} from '../../services/auth.service';
import {REDIRECT_URI} from '../../constants';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.css']
})
export class UserMenuComponent implements OnInit {

  constructor(private token: TokenizingService,
              public auth: AuthService) { }
  logOut(): void {
    this.token.deleteLocalToken();
    window.location.href = REDIRECT_URI;
  }
  ngOnInit() {
  }

}
