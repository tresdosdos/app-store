import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './app-dashboard/dashboard/dashboard.component';
import { ModalWindowComponent } from './modal-window/modal-window.component';
import { SearchDashboardComponent } from './search-dashboard/search-dashboard/search-dashboard.component';
import { HeaderComponent } from './header/header/header.component';
import { AdminPanelComponent } from './auth/admin-panel/admin-panel.component';

// TODO: loadChildren

const appRoutes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'apps/:id', component: ModalWindowComponent },
  { path: 'search/:id', loadChildren: 'src/app/search-dashboard/search-dashboard.module#SearchDashboardModule' },
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
