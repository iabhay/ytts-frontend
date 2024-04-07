import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { UserService } from '../../users/users.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

interface Statuses {
  status: String;
}

@Component({
  selector: 'app-url-component',
  templateUrl: './url-component.component.html',
  styleUrl: './url-component.component.css',
})
export class UrlComponent implements OnInit {
  users;
  errorMessage;
  overlayVisible: boolean;
  user;
  userDialog: boolean = false;
  submitted: boolean = false;
  banStatuses: Statuses[];

  constructor(
    private userService: UserService,
    private messageService: MessageService,
    private router: Router
  ) {}

  ngOnInit() {
    this.banStatuses = [{ status: 'Ban' }, { status: 'Unban' }];
    this.userService.view_ban_urls().subscribe({
      next: (res) => {
        this.users = res;
      },
      error: (err) => {
        this.errorMessage = err;
      },
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

  toggle() {
    this.overlayVisible = !this.overlayVisible;
  }

  banUrl(form: NgForm) {
    if (form.valid) {
      const yt_url = form.value.inp_url;
      this.userService.ban_url(yt_url).subscribe({
        next: (res) => {
          this.messageService.add({
            severity: 'success',
            summary: 'Banned!',
            detail: res.message,
          });
        },
        error: (err) => {
          this.messageService.add({
            severity: 'error',
            summary: 'Unsuccessfull!',
            detail: err.message,
          });
        },
      });
    }
  }

  unbanUrl() {
    this.submitted = true;
    console.log(this.user);
    this.users[this.findIndexById(this.user.url_id)] = this.user;
    this.user.ban_status = this.user.ban_status.status;
    const banStatus = this.user.ban_status;
    const url_id = this.user.url_id;
    if (banStatus === 'Ban') {
      this.userService.ban_url(url_id).subscribe({
        next: (res) => {
          this.showSuccess(res.message);
        },
        error: (err) => {
          this.showError(err);
        },
      });
    } else if (banStatus === 'Unban') {
      this.userService.unban_url(url_id).subscribe({
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
}
