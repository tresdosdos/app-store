import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { ModalWindowComponent } from '../modal-window.component';

const modalRoutes: Routes = [{
  path: '',
  component: ModalWindowComponent
}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(modalRoutes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class ModalRoutingModule { }
