import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  template: `
  <h1>
    {{title}}
  </h1>
  <app-my-heroes></app-my-heroes>
  `
})
export class AppComponent {
  title = 'Tour of Heroes';

  constructor() { }

}
