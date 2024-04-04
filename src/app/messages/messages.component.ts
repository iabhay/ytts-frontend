
import { Component } from '@angular/core';
import { UserService } from '../users/users.service';


@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.css'
})
export class MessagesComponent{

    users;
    // "ban_status",
    // "created_at",
    // "date_time",
    // "role",
    // "search_count",
    // "uid",
    // "username"

  constructor(private userService: UserService){}

  ngOnInit(){
    this.userService.fetchUsers().subscribe(resProducts => {
        console.log(resProducts)
        this.users = resProducts;
    })
  }
  customSort(event){

  }

}