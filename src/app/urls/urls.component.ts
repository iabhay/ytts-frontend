
import { Component } from '@angular/core';
import { UserService } from '../users/users.service';


@Component({
  selector: 'app-urls',
  templateUrl: './urls.component.html',
  styleUrl: './urls.component.css'
})
export class UrlsComponent{

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