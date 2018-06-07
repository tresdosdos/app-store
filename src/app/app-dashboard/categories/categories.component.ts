import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../data-service/get-data.service';
import { App } from '../../mock-schemas/app';
import { AppsInfo } from '../../apps-info';
import { ActivatedRoute } from '@angular/router';
import { TokenizingService } from '../token-service/tokenizing.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  private apps = AppsInfo;
  public filteredArr: App[];
  public category: string;
  public symbol: string;
  public menuIsOpen: boolean;
  public error: string;
  constructor(private data: GetDataService,
              private route: ActivatedRoute,
              private token: TokenizingService) {
  }
  toggleCategoriesMenu(): void {
    this.menuIsOpen = !this.menuIsOpen;
    if (this.menuIsOpen) {
      this.symbol = '◄';
    } else {
      this.symbol = '►';
    }
  }
  ngOnInit() {
    this.menuIsOpen = false;
    this.symbol = '►';
    this.token.tokenCheck();
    const func = () => {
      this.route.params.subscribe(params => {
        this.category = params['category'];
        try {
          this.filteredArr = this.data.filterData(this.category, this.apps);
        } catch (e) {
          if (e.message === 'input problems') {
            this.error = e.message;
          }
        }
      });
    };
    this.data.appsInfoCheck(func);
  }
}
