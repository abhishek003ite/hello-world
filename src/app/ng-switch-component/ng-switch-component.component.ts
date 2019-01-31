import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-switch-component',
  template: `
    <div [ngSwitch] = "color">
      <div *ngSwitchCase="'red'">Your picked red color.</div>
      <div *ngSwitchCase="'blue'">Your picked blue color.</div>
      <div *ngSwitchCase="'green'">Your picked green color.</div>
      <div *ngSwitchDefault>Pick Again</div>
    </div>
  `,
  styles: []
})
export class NgSwitchComponentComponent implements OnInit {


  public color = "pink";

  constructor() { }

  ngOnInit() {
  }

}
