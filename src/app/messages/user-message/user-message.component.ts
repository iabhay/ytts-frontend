import { Component } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-message',
  templateUrl: './user-message.component.html',
  styleUrl: './user-message.component.css'
})
export class UserMessageComponent{
  users;

  customSort(event){}
}