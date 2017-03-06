import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  template: `
    <ul>
    <li *ngFor="let tab of tabs">{{tab.name}}</li>
    </ul>
  `,
  styles: []
})
export class TabsComponent implements OnInit {
  tabs = [{'name': 'tab 1', 'content': ' tab 1 content'}, {'name': 'tab 2', 'content': ' tab 2 content'},
          {'name': 'tab 3', 'content': ' tab 3 content'}];
  constructor() {
  }

  ngOnInit() {
  }


}
