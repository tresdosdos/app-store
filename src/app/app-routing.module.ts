import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './app-dashboard/dashboard/dashboard.component';
import { ModalWindowComponent } from './app-dashboard/modal-window/modal-window.component';
import { SearchDashboardComponent } from './app-dashboard/search-dashboard/search-dashboard.component';
import { HeaderComponent } from './header/header.component';
import { AdminPanelComponent } from './app-dashboard/admin-panel/admin-panel.component';

// TODO: loadChildren

const appRoutes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'app/:id', component: ModalWindowComponent },
  { path: 'search/:id', component: SearchDashboardComponent },
  { path: 'auth', component: HeaderComponent },
  { path: 'admin/panel', component: AdminPanelComponent }
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
