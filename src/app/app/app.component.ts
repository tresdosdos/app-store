import { Component, OnInit, Input } from '@angular/core';
import { App } from '../services/app';
import {Router} from '@angular/router';
import {Theme} from '../services/theme';

@Component({
  selector: 'app-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @Input() app: App;
  @Input() theme: Theme;
  constructor(private router: Router,
              ) { }
  toggleModal(): void {
    this.router.navigate(['/app/' + this.app.id]);
  }
  ngOnInit() {
  }

}
