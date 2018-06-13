import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppsComponent } from './apps/apps.component';
import { HttpService } from './http-service/http.service';
import { ThemeDataService } from './theme-data/theme-data.service';
import { UserDataService } from './user-data/user-data.service';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [AppsComponent],
  declarations: [AppsComponent],
  providers: [HttpService, ThemeDataService, UserDataService]
})
export class SharedModule { }
