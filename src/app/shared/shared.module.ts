import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppsComponent } from './apps/apps.component';
import { HttpService } from './http-service/http.service';
import { ThemeDataService } from '../core/theme-data/theme-data.service';
import { UserDataService } from '../core/user-data/user-data.service';
import { Angular2FontawesomeModule } from 'angular2-fontawesome';

@NgModule({
  imports: [
    CommonModule,
    Angular2FontawesomeModule
  ],
  exports: [AppsComponent],
  declarations: [AppsComponent],
  providers: [HttpService, ThemeDataService, UserDataService]
})
export class SharedModule { }
