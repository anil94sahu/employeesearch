import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { login } from './login.model';
import { credential } from './login.constant';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private route: Router) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.loginForm  = new FormGroup({
      email: new FormControl('', Validators.compose([Validators.required])),
      password: new FormControl('', Validators.compose([Validators.required]))
    });
  }

  doLogin(formData: login) {
    console.log(formData);
    if(formData.email === credential[0].email && formData.password === credential[0].password){
      this.route.navigate(['search']);
    }
  }
}
