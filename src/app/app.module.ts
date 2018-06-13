import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppDashboardModule } from './app-dashboard/app-dashboard.module';
import { AuthModule } from './auth/auth.module';
import { CategoriesModule } from './categories/categories.module';
import { CoreModule } from './core/core.module';
import { HeaderModule } from './header/header.module';
import { ModalWindowModule } from './modal-window/modal-window.module';
import { SearchDashboardModule } from './search-dashboard/search-dashboard.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HeaderModule,
    AppRoutingModule,
    AppDashboardModule,
    AuthModule,
    CategoriesModule,
    CoreModule,
    ModalWindowModule,
    SearchDashboardModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
