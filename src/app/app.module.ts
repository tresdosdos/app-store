import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HeaderModule} from './header/header.module';
import {AppDashboardModule} from './app-dashboard/app-dashboard.module';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './/app-routing.module';
import {CategoriesModule} from './categories/categories.module';
import { ModalWindowComponent } from './modal-window/modal-window.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalWindowComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HeaderModule,
    AppDashboardModule,
    AppRoutingModule,
    CategoriesModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
