import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myangapp';

  uname:string;
  constructor()
  {
this.uname = sessionStorage.uname;
  }
}
