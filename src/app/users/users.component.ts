import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { FeatureService } from '../features/features.service';
import { UserService } from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent {
  users;
  errorMessage;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.fetchUsers().subscribe({
      next: (res) => {
        this.users = res;
      },
      error: (err) => {
        this.errorMessage = err;
      },
    });
  }
}
