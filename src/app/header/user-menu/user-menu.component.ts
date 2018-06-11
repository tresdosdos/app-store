import { Component, OnInit } from '@angular/core';
import { TokenizingService } from '../../app-dashboard/token-service/tokenizing.service';
import { AuthService } from '../auth-service/auth.service';
import { REDIRECT_URI } from '../../constants';
import { RIGHTS } from '../../constants';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.css']
})
export class UserMenuComponent implements OnInit {
  public rights = RIGHTS;
  constructor(private token: TokenizingService,
              public auth: AuthService) { }
  logOut(): void {
    this.token.deleteLocalToken();
    document.location.href = REDIRECT_URI;
  }
  ngOnInit() {
  }

}
