import { Component, OnInit, Input } from '@angular/core';
import { App } from '../../mock-schemas/app';
import { Router } from '@angular/router';
import { THEME } from '../../theme-info';
import { AuthService } from '../../header/auth-service/auth.service';

@Component({
  selector: 'app-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @Input() app: App;
  public theme = THEME;
  public hint: string;
  constructor(private router: Router,
              private auth: AuthService
              ) { }
  toggleModal(): void {
    if (this.auth.checkRights() !== 'non-logged') {
      this.router.navigate(['/app/' + this.app.id]);
    } else {
      this.hint = 'You are not logged to check this info';
    }
  }
  ngOnInit() {
  }

}
