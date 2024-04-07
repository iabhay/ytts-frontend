import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { UserService } from '../users.service';
import { ActivatedRoute, OnSameUrlNavigation, Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { AuthService } from '../../auth/auth.service';

interface Roles {
  role: String;
}
interface Statuses {
  status: String;
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent implements OnInit {
  users;
  openerCmp;
  counter = 0;
  newCounter;
  user;
  userDialog: boolean = false;
  selectedUsers;
  submitted: boolean = false;
  statuses!: any[];

  roles: Roles[];
  banStatuses: Statuses[];

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private vcr: ViewContainerRef,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private router: Router
  ) {}

  ngOnInit() {
    this.roles = [{ role: 'Premium User' }, { role: 'Non Premium User' }];
    this.banStatuses = [{ status: 'Ban' }, { status: 'Unban' }];
    this.userService.fetchUsers().subscribe((res) => {
      this.users = res;
    });
  }

  openNew() {
    this.user = {};
    this.submitted = false;
    this.userDialog = true;
  }

  editUser(user) {
    this.user = { ...user };
    this.userDialog = true;
  }

  showUser(user) {
    this.router.navigate(['admin/manage-users/user-detail', user.uid]);
  }

  hideDialog() {
    this.userDialog = false;
    this.submitted = false;
  }

  saveUser() {
    this.submitted = true;
    this.users[this.findIndexById(this.user.id)] = this.user;
    this.user.role = this.user.role.role;
    this.user.ban_status = this.user.ban_status.status;
    const roleNew = this.user.role;
    const banStatus = this.user.ban_status;
    const uid = this.user.uid;

    if (roleNew === 'Premium User') {
      this.userService.upgrade_user(uid).subscribe({
        next: (res) => {
          this.showSuccess(res.message);
        },
        error: (err) => {
          this.showError(err);
        },
      });
    } else if (roleNew === 'Non Premium User') {
      this.userService.downgrade_user(uid).subscribe({
        next: (res) => {
          this.showSuccess(res.message);
        },
        error: (err) => {
          this.showError(err);
        },
      });
    }

    if (banStatus === 'Ban') {
      this.userService.ban_user(uid).subscribe({
        next: (res) => {
          this.showSuccess(res.message);
        },
        error: (err) => {
          this.showError(err);
        },
      });
    } else if (banStatus === 'Unban') {
      this.userService.unban_user(uid).subscribe({
        next: (res) => {
          this.showSuccess(res.message);
        },
        error: (err) => {
          this.showError(err);
        },
      });
    }
    this.users = [...this.users];
    this.userDialog = false;
    this.user = {};
  }

  showSuccess(msg) {
    this.messageService.add({
      severity: 'Success',
      summary: msg,
      detail: 'User Updated!',
      life: 6000,
      closable: true,
    });
  }

  showError(msg) {
    this.messageService.add({
      severity: 'Failed',
      summary: msg,
      detail: 'User not Updated!',
      life: 6000,
      closable: true,
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
