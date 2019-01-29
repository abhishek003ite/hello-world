import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-third-component',
  template: `
    <h2>Welcome {{name}}</h2>
    <h2 class="text-success">GreatStart</h2>
    <h2 [class]="successClass">GreatStart</h2>
    <h2 class="text-special" [class]="successClass">GreatStart</h2>
    <h2 [class.text-danger]="hasError">GreatStart</h2>

    <h2 [ngClass]="messageClasses">GreatStart</h2>
  `,
  styles: [`
    .text-success {
      color: green;
    }

    .text-danger {
      color: red;
    }

    .text-special {
      font-style: italic;
    }
  `]
})
export class ThirdComponentComponent implements OnInit {

  public name="Abhishek";

  public successClass = "text-success";

  public hasError = true;

  public isSpecial = true;

  public messageClasses = {
    "text-success": !this.hasError,
    "text-danger": this.hasError,
    "text-special": this.isSpecial
  }

  constructor() { }

  ngOnInit() {
  }

}
