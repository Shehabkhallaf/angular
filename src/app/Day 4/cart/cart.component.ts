import { Component, OnInit, Input } from '@angular/core';
import productslist from '../../../assets/data.json'
import { ActivatedRoute, Router } from '@angular/router';
import { CounterService } from '../services/counter.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  counter = 0;
  productDetails : any ;
  constructor(private counterServies: CounterService ,private activatedRoute : ActivatedRoute) {
    const activatedId = this.activatedRoute.snapshot.params['id']
    this.productDetails = productslist.find(product => product.id == activatedId)
  }

  ngOnInit(): void {
    this.counterServies.getCounterValue().subscribe(val => this.counter = val)
  }
  incresaseCounter() {
    this.counterServies.setCounterValue(++this.counter)
  }
  decresaseCounter() {
    this.counterServies.setCounterValue(--this.counter)
  }
}
