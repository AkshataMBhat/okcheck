import { Component, OnInit } from '@angular/core';
import {ProductService} from '../Services/product.service'
import { Product } from '../Models/Product';
import { HttpResponse } from '@angular/common/http';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
 // providers:[ProductService]
})
export class ProductsComponent implements OnInit {


  ProdList: Product [];
  constructor(public prodservices:ProductService , public rout:Router) {


    window.location.reload();
   }

  ngOnInit() {
   

    this.ViewProducts();
  }
  ViewProducts()
  {
   
      this.prodservices.ViewProducts().subscribe((list: any)=>
{
this.ProdList = list;
console.log(this.ProdList);
}, (err) => {
  console.log(err);
}
    )}




    Navgiatedata()
  {

       
      this.rout.navigateByUrl("app-products/app-user-orders")
   

    }
  //  alert(this.rout.getCurrentNavigation)
  

  Viewdata(prod:Product)
  {
   alert(prod.pid)
   if(sessionStorage.uname==null){

    this.rout.navigateByUrl("app-register")
  }
  else
  {
    sessionStorage.pid = prod.pid;
    this.rout.navigateByUrl("app-products/app-user-orders")
  }

  }


  MoveNext()
  {
    
    alert(this.ProdList[2].pname);
  }
}



