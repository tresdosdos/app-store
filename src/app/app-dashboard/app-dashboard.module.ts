import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from '../app/app.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [DashboardComponent, AppComponent],
  declarations: [AppComponent, DashboardComponent]
})
export class AppDashboardModule { }
