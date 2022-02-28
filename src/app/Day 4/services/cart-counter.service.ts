import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartCounterService {
  private addCart = new BehaviorSubject(0)
  constructor() { }

  getCartValue(){
    return this.addCart;
  }
  setCartValue(newCartCouterValue : number){
    return this.addCart.next(newCartCouterValue)
  }
}
