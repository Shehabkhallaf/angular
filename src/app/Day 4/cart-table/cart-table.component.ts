import { Component, OnInit ,Input } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { CartCounterService } from '../../Day 4/services/cart-counter.service';
import productslist from '../../../assets/data.json'

@Component({
  selector: 'app-cart-table',
  templateUrl: './cart-table.component.html',
  styleUrls: ['./cart-table.component.css']
})
export class CartTableComponent implements OnInit {
  products : Product[] = productslist ;
  cartCounter = 0 ;
  constructor(private cartCounterServies : CartCounterService) { }

  ngOnInit(): void {
    this.cartCounterServies.getcartCounterValue().subscribe(val => this.cartCounter = val)
  }

}
