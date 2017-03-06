import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template:`
    <div>
      <app-tabs>
      </app-tabs>
    </div>
  `
})
export class AppComponent {
  title = 'app works!';
}
