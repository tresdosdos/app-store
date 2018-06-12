import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { App } from '../../mock-schemas/app';
import { Router } from '@angular/router';
import { AuthService } from '../../header/auth-service/auth.service';
import { RIGHTS, STATIC_PATH } from '../../constants';
import { Theme } from '../../mock-schemas/theme';
import { ThemeDataService } from '../../shared-services/theme-data/theme-data.service';
import { ISubscriptions } from '../../interfaces';

@Component({
  selector: 'app-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  @Input() app: App;
  private subscription: ISubscriptions = {
    first: null
  };
  public themeData: Theme;
  public hint: string;
  public STATIC_PATH = STATIC_PATH;
  constructor(private router: Router,
              private auth: AuthService,
              private theme: ThemeDataService) { }
  toggleModal(): void {
    if (this.auth.checkRights() !== RIGHTS.NON_LOGGED) {
      this.router.navigate(['/app/' + this.app.id]);
    } else {
      this.hint = 'You are not logged to check this info';
    }
  }
  ngOnInit() {
    this.subscription.first = this.theme.getThemeObservableData().subscribe((themeData: Theme) => {
      this.themeData = themeData;
    });
  }
  ngOnDestroy() {
   this.subscription.first.unsubscribe();
  }
}
