import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import {Router} from '@angular/router';
import {Register } from '../Models/Register'
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor (public httpService: HttpClient,private router: Router) { }
 RegisterUrl:string = "http://localhost:50736/api/Registers";

loginUrl:string = "http://localhost:50736/api/login"

AddNewUser(Regvalue:Register):Observable<Register>
{
  return this.httpService.post<Register>(this.RegisterUrl, Regvalue);
 
  
    
}

CheckUser(Regvalue:Register):Observable<Register>
{
  return this.httpService.post<Register>(this.loginUrl, Regvalue);
 
  
    
}
}

// export class Register {
//   uname:string;
//   password:string;
//   gender:boolean;
//   DOB:string;
//   email:string;
//   Desgination:string;
// }
