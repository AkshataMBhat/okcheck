import { Component, OnInit } from '@angular/core';
import {UserOrdersService} from '../Services/user-orders.service';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { Register } from '../Models/Register';
import { UserOrder } from '../Models/Userorder';

@Component({
  selector: 'app-user-orders',
  templateUrl: './user-orders.component.html',
  styleUrls: ['./user-orders.component.css']
})
export class UserOrdersComponent implements OnInit {

  constructor(public userservice:UserOrdersService ) {



  }

  ngOnInit() {
  }


  NewOrder(Regvalue:UserOrder)
  {

    var dt = new Date();
   Regvalue.uname= sessionStorage.uname;
   Regvalue.transdate = dt;
   Regvalue.pid=sessionStorage.pid ;


      this.userservice.NewOrder(Regvalue).subscribe((list: any)=>
{
alert(list);
alert("Transaction complete!!")
}, (err) => {
  console.log(err);
}
    )}

}
