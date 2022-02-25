import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Content3Component } from './Day 3/task 1/content3/content3.component';
import { LoginComponent } from './Day 4/login/login.component';
import { NotFoundPageComponent } from './Day 4/not-found-page/not-found-page.component';
import { ProductDetailsComponent } from './Day 4/product-details/product-details.component';
import { ProductcartComponent } from './Day 4/productcart/productcart.component';
import { ProductsListComponent } from './Day 4/products-list/products-list.component';
import { RegisterComponent } from './Day 4/register/register.component';


const routes: Routes = [
  {path:'',component : LoginComponent },
  {path:'Register',component : RegisterComponent },
  {path:'Product-details/:id',component : ProductDetailsComponent },
  {path:'Products-list',component : ProductsListComponent },
  {path:'**',component : NotFoundPageComponent },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
