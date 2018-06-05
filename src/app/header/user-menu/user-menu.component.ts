import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.css']
})
export class UserMenuComponent implements OnInit {

  constructor(public auth: AuthService,
              private router: Router) { }
  logOut(): void {
    this.auth.deleteLocalToken();
    this.router.navigate(['/']);
  }
  ngOnInit() {
  }

}
