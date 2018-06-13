import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Angular2FontawesomeModule } from 'angular2-fontawesome';
import { CategoriesComponent } from './categories/categories.component';
import { CategoriesRoutingModule } from './categories-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    Angular2FontawesomeModule,
    CategoriesRoutingModule,
    SharedModule
  ],
  declarations: [CategoriesComponent]
})
export class CategoriesModule { }
