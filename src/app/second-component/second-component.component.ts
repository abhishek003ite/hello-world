import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-component',
  template: `
    <h2>Welcome {{name}}</h2>
  `,
  styles: [`
    h2 {
      color: red;
    }
  `]
})
export class SecondComponentComponent implements OnInit {

  public name = 'Abhishek';

  constructor() { }

  ngOnInit() {
  }

}
