import { Component, OnInit ,Input, Output ,EventEmitter } from '@angular/core';




@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input() cardTitle : any; 
  constructor() { }

  ngOnInit(): void {
  }
  
  
}
