import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppsComponent} from './apps/apps.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [AppsComponent],
  declarations: [AppsComponent]
})
export class SharedModule { }
