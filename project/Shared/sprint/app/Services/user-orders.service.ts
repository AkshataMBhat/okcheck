import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import {Router} from '@angular/router';
import {UserOrder } from '../Models/Userorder'
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserOrdersService {

  constructor (public httpService: HttpClient,private router: Router) { }
userOrderUrl:string = "http://localhost:50736/api/userorders";



NewOrder(ordervalue:UserOrder):Observable<UserOrder>
{
  return this.httpService.post<UserOrder>(this.userOrderUrl, ordervalue);
 
  
    
}

}

