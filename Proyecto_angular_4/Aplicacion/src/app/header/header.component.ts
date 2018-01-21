import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() header = new EventEmitter();
  evento = null;
  cargarEnHome(option_event){
    this.evento = option_event;
    this.header.emit(this.evento);
  }
  constructor() { }

  ngOnInit() {
  }

}
