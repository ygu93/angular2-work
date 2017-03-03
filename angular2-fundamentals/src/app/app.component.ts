import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `<div>
  <ul>
    <li *ngFor="let message of mail.messages">{{message.text}}</li>
  </ul>

  <ul>
  <app-simple-form *ngFor = "let message of mail.messages" [message] = "message.text" (update) = "onUpdate(message.id, $event.text)">

  </app-simple-form>
  </ul>
  </div>`,
  styles: [`
    app-simple-form{
      margin-bottom: 10px;
    }`]
})
export class AppComponent {
  title = `Let's get started`;

  onUpdate(id, text){
    this.mail.update(id, text);
  }

  constructor(@Inject('mail') private mail,
  ) {}
}
