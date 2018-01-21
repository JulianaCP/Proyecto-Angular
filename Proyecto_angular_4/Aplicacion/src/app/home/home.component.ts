import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  option = "gallery";

  cargarComponent(option_event){
    this.option = option_event;
  }
  constructor() { }

  ngOnInit() {
  }

}
