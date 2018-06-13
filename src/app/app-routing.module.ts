import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './app-dashboard/dashboard/dashboard.component';
import { HeaderComponent } from './header/header/header.component';

const appRoutes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'apps/:id', loadChildren: './modal-window/modal-window.module#ModalWindowModule' },
  { path: 'search/:id', loadChildren: './search-dashboard/search-dashboard.module#SearchDashboardModule' },
  { path: 'categories', loadChildren: './categories/categories.module#CategoriesModule', pathMatch: 'prefix' },
  { path: 'auth', component: HeaderComponent },
  { path: 'admin/panel', loadChildren: './auth/auth.module#AuthModule' },
  { path: '**', redirectTo: '' }
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
