import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CartCounterService {
  productList = 0;

  constructor(private http: HttpClient, private router: Router) { }

  getProductList() {
    return this.http.get('https://fakestoreapi.com/products', {
      params: {
        limit: 9,
      },
    });
  }

  navigateToBlogDetails() {
    this.router.navigate(['/Product-details', this.productList])
  }

}
