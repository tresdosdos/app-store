import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CategoriesComponent} from './categories.component';
import {RouterModule, Routes} from '@angular/router';

const appRoutes: Routes = [
  { path: 'categories/:category', component: CategoriesComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class CategoriesRoutingModule { }
