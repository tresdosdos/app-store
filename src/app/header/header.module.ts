import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { HeaderComponent } from './header.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [HeaderComponent],
  declarations: [NavigationComponent, HeaderComponent]
})
export class HeaderModule { }
