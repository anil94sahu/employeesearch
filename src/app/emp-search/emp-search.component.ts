import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { emp } from './emp.model';
import { employeeDetail } from './emp.constant';

@Component({
  selector: 'app-emp-search',
  templateUrl: './emp-search.component.html',
  styleUrls: ['./emp-search.component.css']
})
export class EmpSearchComponent implements OnInit {

  editForm:FormGroup;
  key = '';
  editMode = false;
  empDetails: emp[] = employeeDetail;
  employee;

  constructor() { }

  ngOnInit() {
    this.buildForm();
    this.employee = Object.assign([], this.empDetails);
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

  edit(item:emp) {
    this.editMode = true;
    let obj : emp = {
      id: item.id,
      fullName : item.fullName,
      userName: item.userName,
      email: item.email,
      password: item.password,
    }
    this.editForm.setValue(
      obj
    )
  }

  update(formData: emp) {
    console.log(formData);
    const jsonObj:emp[] = this.empDetails;
    for (var i = 0; i < jsonObj.length; ++i) {
      if (jsonObj[i]['id'] === formData.id) {
          jsonObj[i] = formData;
      }
  }
  this.editMode = false;
  
  }

  delete(item) {
    const emp = Object.assign(this.empDetails, {});
    this.empDetails = emp.filter(order => order.id !== item.id);        
  }

  search(value:string) {
    const emp = Object.assign(this.employee, []);
    this.empDetails = emp;
    const empDetails = this.empDetails;
    if (!empDetails) return [];
    if (!value)  this.empDetails = emp;
    if (value && empDetails )
    this.empDetails =  empDetails.filter(singleItem =>
    singleItem['fullName'].toLowerCase().startsWith(value.toLowerCase())
    );

  }
  }


