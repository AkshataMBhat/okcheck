import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { SelectControlValueAccessor } from '@angular/forms';
import {Router} from '@angular/router'
import { Session } from 'protractor';
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
  
})
export class NewsComponent  {
  constructor (public httpService: HttpClient,private router: Router) { }
  cust: icust [];
  ic:icust ;
  log:userlogin;
  ngOnInit () {
    this.httpService.get('http://localhost:50736/api/angulardatas').subscribe(
      data => {
        this.cust = data as icust [];	 // FILL THE ARRAY WITH DATA.
          console.log(this.cust[1]);
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
    }
    insertcust()
    {

      var cid = parseInt((document.getElementById('custid') as HTMLInputElement).value);
      var cname = (document.getElementById('custname') as HTMLInputElement).value;
      var cage = parseInt((document.getElementById('age') as HTMLInputElement).value);

      //let traveller:Traveller = {
       let ic:icust =  {        custid: cid,
        custname:cname,
        age:cage
      }
    
      

      

      this.httpService.post('http://localhost:50736/api/angulardatas',ic).subscribe(


        data => {
          this.cust = data as icust [];	 // FILL THE ARRAY WITH DATA.
            console.log(this.cust[1]);
        },

      // ()=> {alert('done')
      //   },
        (err: HttpErrorResponse) => {
          console.log (err.message);
        }
      );
     
alert("insert successfull");


    }



    deletecust()
    {

       var cid = parseInt((document.getElementById('custid') as HTMLInputElement).value);
   
      

    

      this.httpService.delete('http://localhost:50736/api/angulardatas/'+cid).subscribe(
      ()=> {alert('done')
        },
        (err: HttpErrorResponse) => {
          console.log (err.message);
        }
      );
     
alert("delete successfull");


    }

    externalurl()
    {
//alert(this.router.url)
this.router.ngOnDestroy();
     // this.router.navigateByUrl("/app-news/testing.html");  
      //window.open("http://localhost:4200/testing.html", "_self");
      this.router.navigate(["/"]).then(result=>{window.location.href = 'http://localhost:4200/testing.html';});
     // 
      //window.location.href="C:\AngularDemos\angularlnt\myangapp\testing.html";
  }
    updatecust()
    {

       var cid = parseInt((document.getElementById('custid') as HTMLInputElement).value);
      var cname = (document.getElementById('custname') as HTMLInputElement).value;
      var cage = parseInt((document.getElementById('age') as HTMLInputElement).value);

      //let traveller:Traveller = {
       let ic:icust =  {        custid: cid,
        custname:cname,
        age:cage
      }
    
      

      //alert(ic.custid);

      this.httpService.put('http://localhost:50736/api/angulardatas/'+cid,ic).subscribe(
      ()=> {alert('done')
        },
        (err: HttpErrorResponse) => {
          console.log (err.message);
        }
      );
     
alert("update successfull");


    }


    navigatepage()
    {
      
      this.router.navigateByUrl('app-music');
      
    }
//   success(data)
//   {
// //alert(data[0]);
//     this.Dishes = data as string [];	 // FILL THE ARRAY WITH DATA.
//    //alert(this.Dishes[0][0]);
//     console.log(this.Dishes[1]);

//   }


Login()
{

  var uid = (document.getElementById('uid') as HTMLInputElement).value;
  var pwd = (document.getElementById('pwd') as HTMLInputElement).value;


  //let traveller:Traveller = {
   let log:userlogin =  {        uid: uid,pwd:pwd
  }

  

  

  this.httpService.post('http://localhost:50736/api/Login/UserLogin',log).subscribe(


    (data:any) => {
      sessionStorage.setItem("a","ajay kumar")
      console.log (data);
      this.router.navigateByUrl('app-music');
 
     
     
    },

  // ()=> {alert('done')
  //   },
    (err: HttpErrorResponse) => {
      console.log (err.message);
      console.log (err.status);
    }
  );
 



}
}
 export class icust
{
custid:number;
custname:string;
age:number
}

export class userlogin
{
uid:string;
pwd:string;

}