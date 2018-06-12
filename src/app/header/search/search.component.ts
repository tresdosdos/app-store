import { Component, OnInit } from '@angular/core';
import { KEYBOARD } from '../../constants';
import { GetDataService } from '../../app-dashboard/data-service/get-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public searchLine: string;
  constructor(private data: GetDataService,
              private router: Router) { }
  handleClick(e): void {
    if (e.keyCode === KEYBOARD.ENTER) {
      if (this.searchLine) {
        this.router.navigate(['/search/' + this.searchLine]);
      }
    }
  }
  ngOnInit() {
  }

}
