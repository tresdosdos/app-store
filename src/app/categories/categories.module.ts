import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from './categories.component';
import {CategoriesRoutingModule} from './categories-routing.module';
import {AppDashboardModule} from '../app-dashboard/app-dashboard.module';

@NgModule({
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    AppDashboardModule
  ],
  exports: [CategoriesComponent],
  declarations: [CategoriesComponent]
})
export class CategoriesModule { }
