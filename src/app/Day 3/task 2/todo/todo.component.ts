import { Component, OnInit, ViewChild } from '@angular/core';
import { Body4Component } from './body4/body4.component';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  dataFromchild: string[] = [];
  constructor() {   }

  ngOnInit(): void {
  }
  receiveMessage(newData: string) {
    this.dataFromchild.push(newData)
    console.log(this.dataFromchild)
  }

}
