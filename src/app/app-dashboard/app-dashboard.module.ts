import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app/app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesComponent } from './categories/categories.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { ModalWindowComponent } from './modal-window/modal-window.component';
import { SearchDashboardComponent } from './search-dashboard/search-dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    CategoriesRoutingModule
  ],
  declarations: [AppComponent, DashboardComponent, CategoriesComponent, AdminPanelComponent, ModalWindowComponent, SearchDashboardComponent]
})
export class AppDashboardModule { }
