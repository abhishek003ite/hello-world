import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for-component',
  template: `

  <div *ngFor="let color of colors; first as f; last as l; odd as o; even as e">
    <h2>{{f}} {{l}} {{o}} {{e}} {{color}}</h2>
  </div>

  `,
  styles: []
})
export class NgForComponentComponent implements OnInit {


  public colors = ['red', 'green', 'blue', 'yellow'];

  constructor() { }

  ngOnInit() {
  }

}
