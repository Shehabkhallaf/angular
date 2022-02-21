import { Component, OnInit, Input, Output ,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header4',
  templateUrl: './header4.component.html',
  styleUrls: ['./header4.component.css']
})
export class Header4Component implements OnInit {

  @Output() messageEvent = new EventEmitter();
    constructor() { }

  ngOnInit(): void {

  }
  

  getVal(value:string){
    this.messageEvent.emit(value)
  }
}
