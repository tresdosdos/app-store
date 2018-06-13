import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminPanelComponent } from '../admin-panel/admin-panel.component';
import { AdminGuard } from '../../core/guards/admin.guard';

const authRoutes: Routes = [{
  path: '',
  component: AdminPanelComponent,
  canActivate: [AdminGuard]
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
