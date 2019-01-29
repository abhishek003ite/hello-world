import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  template: `
    <h2>
      Welcome {{name}}
    </h2>

    <button (click) = "onClick($event)">Greet</button><br/>
    <button (click) = "greeting='welcome abhishek'">Greet</button>

    {{greeting}}

    {{eventType}}
  `,
  styles: []
})
export class EventBindingComponent implements OnInit {


  public name = "GreatStart";

  public greeting = "";

  public eventType = "";

  constructor() { }

  ngOnInit() {
  }

  onClick(event) {
    console.log(event);

    this.greeting = "Welcome to GreatStart";

    this.eventType = event.type;
  }

}
