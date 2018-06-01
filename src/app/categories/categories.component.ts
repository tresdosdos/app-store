import { Component, OnInit } from '@angular/core';
import {GetDataService} from '../services/get-data.service';
import {App} from '../services/app';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  private apps: App[];
  public getInfo(): App[] {
    return this.apps;
  }
  public setInfo(newInfo): void {
    this.apps = newInfo;
  }
  constructor(private data: GetDataService) { }

  ngOnInit() {
    this.data.getInfo().subscribe((info) => {
      this.setInfo(info);
      console.log(this.getInfo());
    });
  }
}
