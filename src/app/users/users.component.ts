
import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { FeatureService } from '../features/features.service';
import { UserService } from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent{

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