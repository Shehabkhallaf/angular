import { Component, OnInit } from '@angular/core';
import {CartCounterService} from '../../../Day 4/services/cart-counter.service'
@Component({
  selector: 'app-navbar1',
  templateUrl: './navbar1.component.html',
  styleUrls: ['./navbar1.component.css']
})
export class Navbar1Component implements OnInit {
  cartCounter : any ;
  constructor(private cartCounterService : CartCounterService) { }

  ngOnInit(): void {
    this.cartCounter = this.cartCounterService.getCartValue();
  }

}
