import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from './categories/categories.component';
import { RouterModule, Routes } from '@angular/router';

const categoriesRoutes: Routes = [
  {
    path: '',
    component: CategoriesComponent
  },
  {
    path: ':category',
    component: CategoriesComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(categoriesRoutes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class CategoriesRoutingModule { }
