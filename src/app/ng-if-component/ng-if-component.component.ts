import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if-component',
  template: `

    <div *ngIf="displayName; then thenBlock; else elseBlock"></div>

    <ng-template #thenBlock>
      <h2>
        GreatStart
      </h2>
    </ng-template>
    <ng-template #elseBlock>
      <h2>
        Hidden
      </h2>
    </ng-template>
  `,
  styles: []
})
export class NgIfComponentComponent implements OnInit {

  displayName = true;

  constructor() { }

  ngOnInit() {
  }

}
