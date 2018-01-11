import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

//se ocupa poner FormBuilder, FormGroup
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {


  registroForm: FormGroup
  constructor(formBuilder: FormBuilder) { 
    this.registroForm = formBuilder.group({
      'nombre_input': [''],
      'correo_input': [''],
      'password_input': ['']
    });
    
  }

  ngOnInit() {
  }

  onSubmit(form: any){
    console.log( JSON.stringify(form.nombre_input))
  }

}
