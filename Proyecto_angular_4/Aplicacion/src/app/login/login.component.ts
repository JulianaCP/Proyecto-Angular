import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
 
  loginForm: FormGroup
  constructor(formBuilder:FormBuilder ) { 
    this.loginForm = formBuilder.group({
      'username_input': [''],
      'password_input': ['']
    });
   
  }

  ngOnInit() {
  }
  onSubmit(form: any){
    console.log( JSON.stringify(form.username_input))
  }

}
