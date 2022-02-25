import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import productslist from '../../../assets/data.json'
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found-page',
  templateUrl: './not-found-page.component.html',
  styleUrls: ['./not-found-page.component.css']
})
export class NotFoundPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
