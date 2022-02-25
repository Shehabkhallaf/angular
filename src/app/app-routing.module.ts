import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Day 4/login/login.component';
import { NotFoundPageComponent } from './Day 4/not-found-page/not-found-page.component';
import { ProductDetailsComponent } from './Day 4/product-details/product-details.component';
import { ProductsListComponent } from './Day 4/products-list/products-list.component';
import { RegisterComponent } from './Day 4/register/register.component';
import { AuthGuardGuard } from './auth-guard.guard';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'Register', component: RegisterComponent },
  {
    path: 'Product-details/:id', component: ProductDetailsComponent,
    canActivate :[AuthGuardGuard],
  },
  { path: 'Products-list', component: ProductsListComponent },
  { path: '**', component: NotFoundPageComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
