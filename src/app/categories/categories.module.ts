import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from './categories.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [CategoriesComponent],
  declarations: [CategoriesComponent]
})
export class CategoriesModule { }
