import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header2',
  templateUrl: './header2.component.html',
  styleUrls: ['./header2.component.css']
})
export class Header2Component implements OnInit {
  useAvater : string = "../../../assets/img/testimonial-4.jpg"
  head : string = "Heading"
  paragraph : string = "Lorem ipsum dolor sit amet consectetur . Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, nihil."
  button:string="View Details"
  contents : string[]=["","",""]
  constructor() { }

  ngOnInit(): void {
  }

}
