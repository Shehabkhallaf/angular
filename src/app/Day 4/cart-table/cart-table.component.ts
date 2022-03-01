import { Component, OnInit ,Input } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { CartCounterService } from '../../Day 4/services/cart-counter.service';

@Component({
  selector: 'app-cart-table',
  templateUrl: './cart-table.component.html',
  styleUrls: ['./cart-table.component.css']
})
export class CartTableComponent implements OnInit {
  @Input() productitem: Product = {
    id: 0,
    title: "",
    price: 0,
    description: "",
    category: "",
    image: "",
    rating: {
      rate: 0,
      count: 0
    }
  }
  constructor(private cartCounterServies : CartCounterService) { }

  ngOnInit(): void {
    this.cartCounterServies.getcartCounterValue().subscribe(val => this.cartCounter = val)
  }

}
