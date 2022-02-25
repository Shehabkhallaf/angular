import { Component, OnInit } from '@angular/core';
import productslist from '../../../assets/data.json'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  productDetails : any ;
  constructor(private activatedRoute : ActivatedRoute) { 
    const activatedId = this.activatedRoute.snapshot.params['id']
    this.productDetails = productslist.find(product => product.id == activatedId)
  }

  ngOnInit(): void {
  }

}
