import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { HeaderComponent } from './header.component';
import { AppRoutingModule } from '../app-routing.module';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule
  ],
  exports: [HeaderComponent],
  declarations: [NavigationComponent, HeaderComponent, SearchComponent]
})
export class HeaderModule { }
