import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchDashboardComponent } from './search-dashboard/search-dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { SearchRoutingModule } from './search-routing/search-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    SearchRoutingModule
  ],
  declarations: [SearchDashboardComponent]
})
export class SearchDashboardModule { }
