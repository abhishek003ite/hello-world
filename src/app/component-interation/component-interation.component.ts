import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-component-interation',
  template: `
    <h2>{{"Hello "+name}}</h2>
    <button (click)="fireEvent()">send Event</button>
  `,
  styles: []
})
export class ComponentInterationComponent implements OnInit {


  @Input('parentData') public name;

  @Output() public childEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  fireEvent() {
    this.childEvent.emit('Hey Abhishek Shrivastava');
  }

}
