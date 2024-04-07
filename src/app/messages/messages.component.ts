
import { Component } from '@angular/core';
import { UserService } from '../users/users.service';


@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.css'
})
export class MessagesComponent{

    users;

  constructor(private userService: UserService){}

  ngOnInit(){
    this.userService.fetchUsers().subscribe(resProducts => {
        this.users = resProducts;
    })
  }
  customSort(event){

  }

}