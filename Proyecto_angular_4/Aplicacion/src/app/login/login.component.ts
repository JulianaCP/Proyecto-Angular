import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Persona }  from "../models/persona.models";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
 
  peopleList: Persona[]
  persona: Persona
  list: string;
  loginForm: FormGroup
  constructor(private router: Router, private route: ActivatedRoute, formBuilder:FormBuilder ) { 
    this.peopleList = [];
    this.loginForm = formBuilder.group({
      'username_input': [''],
      'password_input': ['']
    });
    
    if (localStorage.peopleList == null ) {
      this.persona = new Persona("Juliana", "JCP27@hotmail.com", "123", "Costa Rica");
      this.peopleList.push(this.persona);
      this.persona = new Persona("Jackeline", "Jacke@hotmail.com", "123", "Costa Rica");
      this.peopleList.push(this.persona);
  
      this.list = JSON.stringify(this.peopleList);
      localStorage.setItem("peopleList",this.list);  
    }   
    this.peopleList = JSON.parse(localStorage.peopleList);
   
  }

  ngOnInit() {
  
  }
  onSubmit(form: any){
    var user = form.username_input;
    var password = form.password_input;
    var correct = this.verificateUser(user,password);
    if(correct == true){
      this.router.navigate([`/home`], { relativeTo: this.route });
    }
  }

  verificateUser(user: string, password: string){
    for (var index = 0; index < this.peopleList.length; index++) {
      if(user == this.peopleList[index].name && password == this.peopleList[index].password){
        return true;
      }
    }
    return false;
  }
}
