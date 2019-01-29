import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-reference-variables',
  template: `
    <h2>Welcome {{name}}</h2>
    <input #myInput type="text"/>
    <button (click)="logMessage(myInput.value)">Log</button>
  `,
  styles: []
})
export class TemplateReferenceVariablesComponent implements OnInit {

  public name = "Abhishek";

  constructor() { }

  ngOnInit() {
  }

  logMessage(value) {
    alert(value);
  }

}
