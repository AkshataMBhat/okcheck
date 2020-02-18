import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import {Router} from '@angular/router';
import {Product } from '../Models/Product'
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor (public httpService: HttpClient,private router: Router) { }
  ProdList: Product [];
ProductUrl:string = "http://localhost:50736/api/products";
ViewProducts():Observable<Product[]>
{
    return this.httpService.get<Product[]>(this.ProductUrl)
    
}
}