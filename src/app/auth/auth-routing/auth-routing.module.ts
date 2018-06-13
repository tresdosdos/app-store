import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AdminPanelComponent} from '../admin-panel/admin-panel.component';

const authRoutes: Routes = [{
  path: '',
  component: AdminPanelComponent
}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(authRoutes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AuthRoutingModule { }
