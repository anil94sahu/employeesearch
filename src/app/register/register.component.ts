import { Component, OnInit } from '@angular/core';
import { employeeDetail } from '../emp-search/emp.constant';
import { emp } from '../emp-search/emp.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  editForm:FormGroup;

  constructor() { }

  ngOnInit() {
  }

  buildForm() {
    this.editForm  = new FormGroup({
      id: new FormControl('', Validators.compose([Validators.required])),
      email: new FormControl('', Validators.compose([Validators.required])),
      password: new FormControl('', Validators.compose([Validators.required])),
      fullName: new FormControl('', Validators.compose([Validators.required])),
      userName: new FormControl('', Validators.compose([Validators.required]))  
    });
  }

  submit(formData: emp) {
    employeeDetail.push(formData);
  }

}
