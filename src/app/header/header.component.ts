import { Component, OnInit, OnDestroy } from '@angular/core';
import { STATIC_PATH, IMAGES } from '../shared/constants';
import { Theme } from '../shared/mock-schemas/theme';
import { ThemeDataService } from '../shared/theme-data/theme-data.service';
import { ISubscriptions } from '../shared/interfaces';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  private subscriptions: ISubscriptions = {
    first: null
  };
  public themeData: Theme;
  public logoUrl = STATIC_PATH + IMAGES.LOGO;
  constructor(private theme: ThemeDataService) { }

  ngOnInit() {
    this.subscriptions.first = this.theme.getThemeObservableData().subscribe((themeData: Theme) => {
      this.themeData = themeData;
    });
  }
  ngOnDestroy() {
    this.subscriptions.first.unsubscribe();
  }
}
