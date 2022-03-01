import { Component, OnInit, Input } from '@angular/core';
import { CartCounterService } from '../../Day 4/services/cart-counter.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-table',
  templateUrl: './cart-table.component.html',
  styleUrls: ['./cart-table.component.css']
})
export class CartTableComponent implements OnInit {
  productList : any;
  constructor(private cartCounterServies: CartCounterService , private router: Router) { }

  ngOnInit(): void {
    this.cartCounterServies.getProductList().subscribe(
      (res) => this.productList = res ,
      (error) => {
        console.log(error);
      },
      () => {
        console.log('completed');
      })
  }

  navigateToBlogDetails() {
    this.router.navigate(['/Product-details', this.productList.id])
  }
}
