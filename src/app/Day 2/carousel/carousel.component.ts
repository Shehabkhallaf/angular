import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  head : string = "Example Headline"
  paragraph : string = "Some representative placeholder content"
  button:string="Sign Up Today"

  constructor() { }

  ngOnInit(): void {
  }

}
