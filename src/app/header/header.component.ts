import { Component, OnInit } from '@angular/core';
import {GetDataService} from '../services/get-data.service';
import {APPS} from '../services/apps';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private data: GetDataService) { }

  ngOnInit() {
  }

}
