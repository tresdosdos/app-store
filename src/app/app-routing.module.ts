import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './app-dashboard/dashboard/dashboard.component';
import {CategoriesComponent} from './categories/categories.component';

const appRoutes: Routes = [
  { path: '', component: DashboardComponent},
  { path: 'categories', component: CategoriesComponent},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
