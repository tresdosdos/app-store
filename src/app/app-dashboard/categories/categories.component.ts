import { Component, OnInit, OnDestroy } from '@angular/core';
import { GetDataService } from '../data-service/get-data.service';
import { App } from '../../mock-schemas/app';
import { ActivatedRoute } from '@angular/router';
import { TokenizingService } from '../token-service/tokenizing.service';
import { ICONS } from '../../constants';
import { ISubscriptions } from '../../interfaces';

@Component({
  selector: 'app-dashboard',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit, OnDestroy {
  private apps: App[];
  private subscriptions: ISubscriptions = {
    first: null,
    second: null
  };
  public filteredArr: App[];
  public category: string;
  public symbol: string;
  public menuIsOpen: boolean;
  constructor(private data: GetDataService,
              private route: ActivatedRoute,
              private token: TokenizingService) {
    this.menuIsOpen = false;
    this.symbol = ICONS.ARROW_RIGHT;
  }
  toggleCategoriesMenu(): void {
    this.menuIsOpen = !this.menuIsOpen;
    if (this.menuIsOpen) {
      this.symbol = ICONS.ARRROW_LEFT;
    } else {
      this.symbol = ICONS.ARROW_RIGHT;
    }
  }
  ngOnInit() {
    this.token.tokenCheck();
    this.subscriptions.first = this.data.getData().subscribe((apps: App[]) => {
      this.apps = apps;
      this.subscriptions.second = this.route.params.subscribe(params => {
            this.category = params['category'];
            if (this.category) {
              this.filteredArr = this.data.filterData(this.category, this.apps);
              }
          });
    });
  }
  ngOnDestroy() {
    this.subscriptions.first.unsubscribe();
    this.subscriptions.second.unsubscribe();
  }
}
