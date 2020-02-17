import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsComponent } from './news/news.component';
import { MusicComponent} from './music/music.component';
import { ProductsComponent } from './products/products.component';
import { RegisterComponent } from './register/register.component';
import { UserOrder } from './Models/Userorder';
import { UserOrdersComponent } from './user-orders/user-orders.component';
import { LoginComponent } from './login/login.component';
import { AppComponent } from 'projects/test/src/app/app.component';

const routes: Routes = [
{path:'app-products',component:ProductsComponent,

children:[{path:'app-user-orders',component:UserOrdersComponent}]



},


{path:'app-register',component:RegisterComponent},
{path:'app-login',component:LoginComponent},
// {path:'app-root',component:AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
