import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import productslist from '../../../assets/data.json'
import { CartCounterService } from '../../Day 4/services/cart-counter.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  products : Product[] = productslist ;
  cartCounter = 0 ;
  constructor(private cartCounterServies : CartCounterService) { }

  ngOnInit(): void {
    // this.cartCounterServies.getcartCounterValue().subscribe(val => this.cartCounter = val)
  }

  
}
