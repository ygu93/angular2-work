import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  template: `
    <div>
      <ul>
        <li *ngFor="let tab of tabs" class="tabs" id={{tabs.indexOf(tab)}} (click)="changeTab($event)">
          {{tab.name}}
        </li>
      </ul>
      <div>
        <p>
        {{tabs[selected].content}}
        </p>
      </div>
    </div>
  `,
  styles: [
    `
    .tabs{
      list-style: none;
    }
    `
  ]
})
export class TabsComponent implements OnInit {
  tabs = [{'name': 'tab 1', 'content': ' tab 1 content'}, {'name': 'tab 2', 'content': ' tab 2 content'},
          {'name': 'tab 3', 'content': ' tab 3 content'}];
  selected = 0;

  changeTab(event){
    this.selected = event.target.id;
  }
  constructor() {
  }

  ngOnInit() {
  }


}
