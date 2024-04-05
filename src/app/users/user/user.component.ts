import {
  Component,
  DoCheck,
  OnChanges,
  OnInit,
  ViewContainerRef,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from '../users.service';
import { ActivatedRoute, OnSameUrlNavigation } from '@angular/router';
import { OverlayComponent } from '../../shared/overlay/overlay.component';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent implements OnInit, OnChanges, DoCheck {
  users;
  openerCmp;
  counter = 0;
  newCounter;
  user;
  userDialog: boolean = false;
  selectedUsers;
  submitted: boolean = false;
  statuses!: any[];

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private vcr: ViewContainerRef,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {}

  ngOnInit() {
    let target = 'all';
    const routeTarget = this.route.url.subscribe(res => {
      target = routeTarget[0].path;
    });
    if (target === 'all') {
      this.userService.fetchUsers().subscribe((res) => {
        this.users = res;
      });
    } else if (target === 'user') {
      // this.userService.fetchUser(user_id).subscribe(res => {
      //   this.users = res;
      // })
    }
  }


  openNew() {
    this.user = {};
    this.submitted = false;
    this.userDialog = true;
  }

  deleteSelectedUsers() {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete the selected users?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.users = this.users.filter(
          (val) => !this.selectedUsers?.includes(val)
        );
        this.selectedUsers = null;
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Users Deleted',
          life: 3000,
        });
      },
    });
  }

  editUser(user) {
    this.user = { ...user };
    this.userDialog = true;
  }

  deleteUser(user) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + user.username + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.users = this.users.filter((val) => val.id !== user.uid);
        this.user = {};
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'User Deleted',
          life: 3000,
        });
      },
    });
  }

  hideDialog() {
    this.userDialog = false;
    this.submitted = false;
  }

  saveUser() {
    this.submitted = true;

    if (this.user.username?.trim()) {
      if (this.user.uid) {
        this.users[this.findIndexById(this.user.id)] = this.user;
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'User Updated',
          life: 3000,
        });
      } else {
        this.users.push(this.user);
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'User Created',
          life: 3000,
        });
      }

      this.users = [...this.users];
      this.userDialog = false;
      this.user = {};
    }
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

  // createId(): string {
  //   let id = '';
  //   var chars =
  //     'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  //   for (var i = 0; i < 5; i++) {
  //     id += chars.charAt(Math.floor(Math.random() * chars.length));
  //   }
  //   return id;
  // }
  ngDoCheck() {}

  ngOnChanges() {}

  customSort(event) {}

  // cardOpener(){
  //   this.openerCmp = this.vcr.createComponent(OverlayComponent);
  //   this.openerCmp.instance.close.subscribe(() => {
  //     this.vcr.clear();
  //   });
  // }
}
