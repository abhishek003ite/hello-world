import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forth-component',
  template: `
    <h2>Welcome {{name}}</h2>
    <h2 [style.color]="'orange'">Style Binding</h2>

    <h2 [style.color]="hasError ? 'red' : 'green'">Style Binding</h2>

    <h2 [style.color]="highlightColor">Style Binding 2</h2>

    <h2 [ngStyle]="titleStyles">Style Binding 3</h2>
  `,
  styles: []
})
export class ForthComponentComponent implements OnInit {

  public name = "Abhishek";

  public hasError = false;

  public isSpecial = true;

  public highlightColor = 'orange';

  public titleStyles = {
    color: 'blue',
    fontStyle: 'italic'
  }

  constructor() { }

  ngOnInit() {
  }

}
