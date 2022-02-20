import { Component, OnInit, Input, Output ,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header4',
  templateUrl: './header4.component.html',
  styleUrls: ['./header4.component.css']
})
export class Header4Component implements OnInit {
  title = 'blog'
  public currentVal =[];
  @Output() public childEvent = new EventEmitter();
  constructor() { }

  // @Output() event = new EventEmitter<string>();

  ngOnInit(): void {

  }
  

  getVal(val:any){
    this.currentVal = val
    this.childEvent.emit(val)
  }
}
