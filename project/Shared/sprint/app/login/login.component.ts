import { Component, OnInit } from '@angular/core';
import {RegisterService} from '../Services/register.service'
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { Register } from '../Models/Register';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})



export class LoginComponent implements OnInit {

errormsg:string;

  constructor(public RegService:RegisterService, public rout:Router ) {



  }
  LoginForm:FormGroup;
 ngOnInit() {
   this.LoginForm = new FormGroup ({
     uname: new FormControl('',Validators.required),
     password: new FormControl()
     
 });

 }
  CheckUser(Regvalue:Register)
  {
   
   this.RegService.CheckUser(Regvalue).subscribe((list: any)=>
{
alert(list);
if(list==true)
{
  sessionStorage.uname=Regvalue.uname;
  //this.rout.navigateByUrl("http://localhost:4200/",{skipLocationChange:true})

  this.rout.navigateByUrl("app-products")

}
else
{
  this.errormsg ="Invalid Credentials.."
}
}, (err) => {
  console.log(err);
}
    )}
}
