import { Component, OnInit } from '@angular/core';
import productslist from '../../../assets/data.json'
import { ActivatedRoute, Router } from '@angular/router';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  productDetails : any ;
  cart = 0 ;
  constructor(private activatedRoute : ActivatedRoute ,private counterServies : CounterService) { 
    const activatedId = this.activatedRoute.snapshot.params['id']
    this.productDetails = productslist.find(product => product.id == activatedId)
  }

  ngOnInit(): void {  
      this.counterServies.getCounterValue().subscribe(val => this.cart = val)
  }
  addToCart(){
    this.counterServies.setCounterValue(++this.cart)
  }
}
