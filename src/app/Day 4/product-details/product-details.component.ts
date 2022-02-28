import { Component, OnInit } from '@angular/core';
import productslist from '../../../assets/data.json'
import { ActivatedRoute, Router } from '@angular/router';
import { CartCounterService } from '../services/cart-counter.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  productDetails : any ;
  cart = 0 ;
  constructor(private activatedRoute : ActivatedRoute ,private CartCouterServies : CartCounterService) { 
    const activatedId = this.activatedRoute.snapshot.params['id']
    this.productDetails = productslist.find(product => product.id == activatedId)
  }

  ngOnInit(): void {  
      this.CartCouterServies.getcartCounterValue().subscribe(val => this.cart = val)
  }
  addToCart(){
    this.CartCouterServies.setcartCounterValue(++this.cart)
  }
}
