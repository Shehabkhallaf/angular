import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  useAvater : string = "../../../assets/img/intro-bg.jpg"
  head : string = "Lorem, ipsum dolor sit amet consectetur adipisicing."
  paragraph :string = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto aliquid molestiae atque dicta!"
  contents : string[]=["","",""]
  constructor() { }

  ngOnInit(): void {
  }

}
