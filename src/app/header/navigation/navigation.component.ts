import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {USERINFO} from '../../services/user-info';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  public userInfo = USERINFO;
  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

}
