import { Component, OnInit } from '@angular/core';
import { KEYBOARD } from '../../constants';
import { GetDataService } from '../../services/get-data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public searchLine: string;
  constructor(private data: GetDataService) { }
  handleClick(e): void {
    if (e.keyCode === KEYBOARD.ENTER) {
      console.log('pressed' + this.searchLine);
    }
  }
  ngOnInit() {
  }

}
