import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import productslist from '../../../assets/data.json'

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  products : Product[] = productslist ;
  constructor() { }

  ngOnInit(): void {
  }

}
