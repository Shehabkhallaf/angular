import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-two',
  templateUrl: './section-two.component.html',
  styleUrls: ['./section-two.component.css']
})
export class SectionTwoComponent implements OnInit {
  titles :string[]=[ "WEb Design","Mobile Design","Logo Design","Web Application Development","Mobile Application Development","PWA Development" ]
  constructor() { }

  ngOnInit(): void {
  }

}
