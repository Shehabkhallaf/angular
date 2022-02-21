import { Component, OnInit, ViewChild } from '@angular/core';
import { Body4Component } from './body4/body4.component';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  dataFromchild: Object[] = [];
  constructor() {   }

  ngOnInit(): void {
  }
  receiveMessage(newData: string) {
    let item = {name:newData , marked : false}
    this.dataFromchild.push(item)
    console.log(this.dataFromchild)
  }

}
