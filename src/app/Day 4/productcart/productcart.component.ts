import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { Router } from '@angular/router';


@Component({
  selector: 'app-productcart',
  templateUrl: './productcart.component.html',
  styleUrls: ['./productcart.component.css']
})
export class ProductcartComponent implements OnInit {
  @Input() productitem : Product ={
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
  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  navigateToBlogDetails(){
    this.router.navigate(['/Product-details',this.productitem.id])
  }
  navigateToBlogCart(){
    this.router.navigate(['/Products-cart',this.productitem.id])
  }
}
