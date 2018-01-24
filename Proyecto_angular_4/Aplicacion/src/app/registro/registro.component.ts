import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Persona } from "../models/persona.models";

import { Router, ActivatedRoute } from "@angular/router";


import { DataService } from '../data.service';
import { HttpClient } from "@angular/common/http";



//se ocupa poner FormBuilder, FormGroup
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  private apiUrl = "https://restcountries.eu/rest/v2/all";

  registroForm: FormGroup
  peopleList: Persona[]
  countries: any
  primerPais: any
  newPerson: Persona
  constructor(private router:Router,private route: ActivatedRoute, public data: DataService, public _http: HttpClient, formBuilder: FormBuilder) { 
    this.countries = []
    this.registroForm = formBuilder.group({
      'nombre_input': [''],
      'correo_input': [''],
      'password_input': [''],
      'country_input':['']
    });
    this.peopleList = JSON.parse(localStorage.peopleList);

   
    this.countries = this.data.getCountries;
    console.log(this.countries);
      
  }

  ngOnInit() {
  }

  onSubmit(form: any){
    var name = form.nombre_input;
    var email = form.correo_input;
    var password = form.password_input;
    var country = form.country_input;

    if(name!="" && email!= "" && password != "" && country != ""){
      this.newPerson = new Persona(name,email,password,country);  
      var users = JSON.parse(localStorage.peopleList);
      users.push(this.newPerson);   
  
      var temp = JSON.stringify(users);
      localStorage.setItem("peopleList",temp);


      localStorage.setItem('user',name);
      this.router.navigate([`/home`], { relativeTo: this.route});
    }

  }
}
