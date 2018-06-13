import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { AuthRoutingModule } from './auth-routing/auth-routing.module';


@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule
  ],
  declarations: [AdminPanelComponent]
})
export class AuthModule { }
