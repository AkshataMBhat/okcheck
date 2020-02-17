import { Component, OnInit } from '@angular/core';
import {RegisterService} from '../Services/register.service'
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { Register } from '../Models/Register';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  

  constructor(public RegService:RegisterService ) {



   }
RegisterForm:FormGroup;
  ngOnInit() {
    this.RegisterForm = new FormGroup ({
      uname: new FormControl('',Validators.required),
      password: new FormControl(),
      gender: new FormControl(),
      DOB: new FormControl(),
      email: new FormControl(),
      Desgination: new FormControl()
  });




  }
  AddNewUser(Regvalue:Register)
  {
   
   this.RegService.AddNewUser(Regvalue).subscribe((list: any)=>
{
alert(list);
}, (err) => {
  console.log(err);
}
    )}






}

// export class Register {
//   uname:string;
//   password:string;
//   gender:boolean;
//   DOB:string;
//   email:string;
//   Desgination:string;
// }
