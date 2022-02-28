import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  private counter = new BehaviorSubject(0)
  constructor() { }

  getCounterValue(){
    return this.counter;
  }
  setCounterValue(newCouterValue : number){
    return this.counter.next(newCouterValue)
  }
}
