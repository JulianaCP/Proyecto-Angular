import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  @Input('homeLogin') userHeader;
  @Output() header = new EventEmitter();
  evento = null;
  cargarEnHome(option_event){
    this.evento = option_event;
    this.header.emit(this.evento);
  }
  cerrarSesion(){
    localStorage.setItem('user',"");
  }
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

}
