import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalWindowComponent } from './modal-window.component';
import { ModalRoutingModule } from './modal-routing/modal-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ModalRoutingModule
  ],
  declarations: [ModalWindowComponent]
})
export class ModalWindowModule { }
