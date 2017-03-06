import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  template: `
    <div class = 'app'>
      <ul class = "tabs">
        <li *ngFor="let tab of tabs" class="tab clickable" id={{tabs.indexOf(tab)}} (click)="changeTab($event)">
          {{tab.name}}
        </li>
      </ul>
      <div class = 'content'>
        <p>
        {{tabs[selected].content}}
        </p>
      </div>
    </div>
  `,
  styles: [
    `
    .tab{
      list-style: none;
      border-left: 1px solid black;
      border-top: 1px solid black;
      border-radius 7px 7px 0px 0px;
      width: 65px;
    }

    .tab:nth-child(3){
      border-right: 1px solid black;
    }


    .content{
      text-align:center;
      border: 1px solid black;
      height: 192px;
      display:flex;
      justify-content: center;
      align-items: center;
    }

    .tabs{
      display:flex;
      justify-content: space-between;
      padding: 0px;
      margin-top: 0px;
      margin-bottom: 0px;
      text-align: center;
    }

    .clickable{
      cursor: pointer;
    }

    .app{
      width:200px;
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
