import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  template: `
    <input type="text" [(ngModel)] = "name" /><br/>
    {{name}}
  `,
  styles: []
})
export class TwoWayBindingComponent implements OnInit {

  public name = "";

  constructor() { }

  ngOnInit() {
  }

}
