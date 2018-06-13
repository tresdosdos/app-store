import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from '../app-routing.module';
import { SearchComponent } from '../search-dashboard/search/search.component';
import { FormsModule } from '@angular/forms';
import { UserMenuComponent } from './user-menu/user-menu.component';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule
  ],
  exports: [HeaderComponent],
  declarations: [NavigationComponent, HeaderComponent, SearchComponent, UserMenuComponent]
})
export class HeaderModule { }
