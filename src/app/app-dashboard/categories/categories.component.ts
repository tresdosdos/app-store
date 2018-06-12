import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../data-service/get-data.service';
import { App } from '../../mock-schemas/app';
import { ActivatedRoute } from '@angular/router';
import { TokenizingService } from '../token-service/tokenizing.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  private apps: App[];
  public filteredArr: App[];
  public category: string;
  public symbol: string;
  public menuIsOpen: boolean;
  constructor(private data: GetDataService,
              private route: ActivatedRoute,
              private token: TokenizingService) { }
  toggleCategoriesMenu(): void {
    this.menuIsOpen = !this.menuIsOpen;
    if (this.menuIsOpen) {
      this.symbol = 'arrow-left';
    } else {
      this.symbol = 'arrow-right';
    }
  }
  ngOnInit() {
    this.menuIsOpen = false;
    this.symbol = 'arrow-right';
    this.token.tokenCheck();
    this.data.getData().subscribe((apps: App[]) => {
      this.apps = apps;
      this.route.params.subscribe(params => {
            this.category = params['category'];
            if (this.category) {
              this.filteredArr = this.data.filterData(this.category, this.apps);
              }
          });
    });
  }
}
