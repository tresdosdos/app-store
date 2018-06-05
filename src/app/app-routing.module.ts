import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './app-dashboard/dashboard/dashboard.component';
import {CategoriesComponent} from './categories/categories.component';
import {ModalWindowComponent} from './modal-window/modal-window.component';
import {SearchDashboardComponent} from './search-dashboard/search-dashboard.component';
import {HeaderComponent} from './header/header.component';
import {AdminPanelComponent} from './admin-panel/admin-panel.component';

const appRoutes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'categories', component: CategoriesComponent, pathMatch: 'prefix' },
  { path: 'app/:id', component: ModalWindowComponent },
  { path: 'search/:id', component: SearchDashboardComponent },
  { path: 'auth', component: HeaderComponent },
  { path: 'admin/panel', component: AdminPanelComponent },
  // TODO: create a null component
  //{ path: '**', component: HeaderComponent }
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
