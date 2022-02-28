import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartCounterService {
  private cart = new BehaviorSubject(0)
  constructor() { }

  getcartCounterValue(){
    return this.cart;
  }
  setcartCounterValue(newCartCouterValue : number){
    return this.cart.next(newCartCouterValue)
  }
}
