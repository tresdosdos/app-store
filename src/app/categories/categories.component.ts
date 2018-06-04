import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../services/get-data.service';
import { App } from '../services/app';
import { APPS } from '../services/apps';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  private apps = APPS;
  public filteredArr: App[];
  public category: string;
  public symbol: string;
  public menuIsOpen: boolean;
  public error: string;
  constructor(private data: GetDataService,
              private route: ActivatedRoute) {
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
    if (!APPS.length) {
      this.data.fetchInfo().subscribe((res) => {
        APPS.push(...res);
        this.route.params.subscribe(params => {
          this.category = params['category'];
          this.filteredArr = this.data.filterData(this.category, this.apps);
        });
      });
    } else {
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
    }
  }
}
