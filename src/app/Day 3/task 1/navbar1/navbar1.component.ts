import { Component, OnInit } from '@angular/core';
import { CounterService } from 'src/app/Day 4/services/counter.service';
import {CartCounterService} from '../../../Day 4/services/cart-counter.service'
@Component({
  selector: 'app-navbar1',
  templateUrl: './navbar1.component.html',
  styleUrls: ['./navbar1.component.css']
})
export class Navbar1Component implements OnInit {
  cartCounter : any ;
  counter : any ;
  constructor(private cartCounterService : CartCounterService , private counterServies : CounterService) { }

  ngOnInit(): void {
    this.cartCounter = this.cartCounterService.getcartCounterValue();
    this.counter = this.counterServies.getCounterValue();

  }

}
