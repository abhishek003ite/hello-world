import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-component',
  template: `
    <h2>Welcome {{name}}</h2>
    <h2>{{2+2}}</h2>
    <h2>{{"Welcome "+name}}</h2>
    <h2>{{name.length}}</h2>
    <h2>{{name.toUpperCase()}}</h2>
    <h2>{{greetUser()}}</h2>
    <input [id] = "myId" value="Abhishek"/>
    <input id = "{{myId}}" [disabled] = 'isDisabled' value="Abhishek"/>
    <input id = "{{myId}}" bind-disabled = 'isDisabled' value="Abhishek"/>
  `,
  styles: [`
    h2 {
      color: red;
    }
  `]
})
export class SecondComponentComponent implements OnInit {

  public name = 'Abhishek';

  public myId = 'testId';

  public isDisabled = true;

  constructor() { }

  ngOnInit() {
  }

  greetUser() {
    return "Hello " + this.name;
  }

}
