import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from './categories/categories.component';
import { RouterModule, Routes } from '@angular/router';

const categoriesRoutes: Routes = [
  { path: 'categories/:category', component: CategoriesComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(categoriesRoutes, {useHash: true})
  ],
  exports: [RouterModule],
  declarations: []
})
export class CategoriesRoutingModule { }
