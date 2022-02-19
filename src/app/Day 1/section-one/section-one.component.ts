import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-one',
  templateUrl: './section-one.component.html',
  styleUrls: ['./section-one.component.css']
})
export class SectionOneComponent implements OnInit {
  skillslist =[1]
  // skillslist : string[] = ["hTML","CSS","PHP","JAVASCRIPT","REACT","PHOTOSHOP","Adobe XD","WordPress" ]

  constructor() { }

  ngOnInit(): void {
  }

}
