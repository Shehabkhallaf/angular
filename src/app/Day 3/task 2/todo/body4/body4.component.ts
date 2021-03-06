import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-body4',
  templateUrl: './body4.component.html',
  styleUrls: ['./body4.component.css']
})
export class Body4Component implements OnInit {
  @Input() public dataFromParent: any;
  constructor() { }

  ngOnInit(): void {

  }

  deleteItem(i: number) {
    this.dataFromParent.splice(i, 1)
  }
  markItem(i: number) {
    this.dataFromParent[i].marked = true
  }
}
