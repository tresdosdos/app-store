import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GetDataService} from './data-service/get-data.service';
import {ThemeDataService} from './theme-data/theme-data.service';
import {UserDataService} from './user-data/user-data.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [GetDataService, ThemeDataService, UserDataService],
  declarations: []
})
export class CoreModule { }
