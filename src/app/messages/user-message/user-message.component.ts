import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { UserService } from '../../users/users.service';
interface Roles {
  role: String;
}
interface Statuses {
  status: String;
}

@Component({
  selector: 'app-user-message',
  templateUrl: './user-message.component.html',
  styleUrl: './user-message.component.css',
})
export class UserMessageComponent implements OnInit {
  users;
  openerCmp;
  counter = 0;
  newCounter;
  user;
  userDialog: boolean = false;
  selectedUsers;
  submitted: boolean = false;
  statuses!: any[];
  errorMessage;
  roles: Roles[];
  banStatuses: Statuses[];

  constructor(
    private userService: UserService,
    private messageService: MessageService,
    private router: Router
  ) {}

  ngOnInit() {
    this.roles = [{ role: 'Premium User' }, { role: 'Non Premium User' }];
    this.banStatuses = [{ status: 'Ban' }, { status: 'Unban' }];
    this.userService.fetchMessages().subscribe(
      {
        next: res => {
        this.users=res;
      },
      error: err => {
        this.errorMessage = err;
      }
  });
  }

  findIndexById(uid: string): number {
    let index = -1;
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].uid === uid) {
        index = i;
        break;
      }
    }
    return index;
  }
}
