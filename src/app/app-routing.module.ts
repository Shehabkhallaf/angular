import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Day 4/login/login.component';
import { NotFoundPageComponent } from './Day 4/not-found-page/not-found-page.component';
import { ProductDetailsComponent } from './Day 4/product-details/product-details.component';
import { ProductsListComponent } from './Day 4/products-list/products-list.component';
import { RegisterComponent } from './Day 4/register/register.component';
import { AuthGuardGuard } from './auth-guard.guard';
import { CartComponent } from './Day 4/cart/cart.component';
import { CartTableComponent } from './Day 4/cart-table/cart-table.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'Register', component: RegisterComponent },
  {
    path: 'Product-details/:id', component: ProductDetailsComponent,
    canActivate :[AuthGuardGuard],
  },
  { path: 'cart-table', component: CartTableComponent },
  { path: 'cart', component: CartComponent },
  { path: 'Product-table', component: CartTableComponent },
  { path: 'Products-list', component: ProductsListComponent },
  { path: '**', component: NotFoundPageComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
