import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './app-dashboard/dashboard/dashboard.component';
import {CategoriesComponent} from './categories/categories.component';
import {ModalWindowComponent} from './modal-window/modal-window.component';
import {SearchDashboardComponent} from './search-dashboard/search-dashboard.component';

const appRoutes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'app/:id', component: ModalWindowComponent },
  { path: 'search/:id', component: SearchDashboardComponent }
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
