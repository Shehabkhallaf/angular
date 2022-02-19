import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skillslist',
  templateUrl: './skillslist.component.html',
  styleUrls: ['./skillslist.component.css']
})
export class SkillslistComponent implements OnInit {
      skills:any []=[
        {
          name : "HTML",
          status : "80%"
        },
        {
          name : "CSS",
          status : "90%"
        },
        {
          name : "PHP",
          status : "60%"
        },
        {
          name : "JAVASCRIPT",
          status : "70%"
        },
        {
          name : "REACT",
          status : "70%"
        },
        {
          name : "PHOTOSHOP",
          status : "60%"
        },
        {
          name : "WordPress",
          status : "50%"
        },{
          name : "Adobe XD",
          status : "80%"
        }
      ]

  constructor() { }

  ngOnInit(): void {
  }

}
