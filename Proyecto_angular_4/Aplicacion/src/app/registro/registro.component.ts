import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Persona } from "../models/persona.models";
import { Http, Response } from "@angular/http";
import 'rxjs/add/operator/map';
import { Router, ActivatedRoute } from "@angular/router";

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
  countries: any[]
  primerPais: any
  newPerson: Persona
  constructor(private router:Router,private route: ActivatedRoute, private http: Http, formBuilder: FormBuilder) { 
    this.countries = []
    this.registroForm = formBuilder.group({
      'nombre_input': [''],
      'correo_input': [''],
      'password_input': [''],
      'country_input':['']
    });
    this.peopleList = JSON.parse(localStorage.peopleList);
    this.getCountries().subscribe(data => {
      this.countries = data; 
      this.primerPais = data[0].name;
    });
  }

  ngOnInit() {
  }

  onSubmit(form: any){
    var name = form.nombre_input;
    var email = form.correo_input;
    var password = form.password_input;
    var country = form.country_input;

    this.newPerson = new Persona(name,email,password,country);  
    var users = JSON.parse(localStorage.peopleList);
    users.push(this.newPerson);   

    localStorage.setItem("peopleList",users);
    this.router.navigate([`/home`], { relativeTo: this.route});
  }

  getCountries(){
    return this.http.get(this.apiUrl).map((res: Response) => res.json());
  }

}
