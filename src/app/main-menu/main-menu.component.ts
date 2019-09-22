import {Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {

  loading = false;

  constructor() { }

  ngOnInit() {
  }

}
