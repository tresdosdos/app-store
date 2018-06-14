import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SearchDashboardComponent } from '../search-dashboard/search-dashboard.component';

const searchRoutes: Routes = [{
  path: '',
  component: SearchDashboardComponent
}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(searchRoutes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class SearchRoutingModule { }
