import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { OpenerComponent } from '../shared/openers/opener.component';
import { Subscription } from 'rxjs';
import { RoleChangeService } from './role-change/role-change.service';
import { ProfileService } from './profile.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent implements OnInit {
  user: any = {
    ban_status: 'unbanned',
    created_at: '10/10/2023',
    date_time: 12 / 12 / 2023,
    role: 'Non Premium User',
    search_count: 2,
    uid: 'U1234',
    username: 'Abhay',
  };
  roleSub: Subscription;
  profileSub: Subscription;
  overlayVisible: boolean = false;
  openerCmp;

  constructor(
    private vcr: ViewContainerRef,
    private roleChange: RoleChangeService,
    private profileService: ProfileService,
    private msgService: MessageService,
    private router: Router
  ) {}

  ngOnInit() {
    this.profileService.profileData().subscribe({
      next: (res) => {
        this.user = res;
      },
      error: (error) => {
        this.msgService.add({
          severity: 'danger',
          summary: 'Not-LoggedIn',
          detail: 'Login!',
        });
      },
    });
  }

  updateRole() {
    if(this.user.role === "premiumuser"){
      this.profileService.updateRole("downgrade").subscribe({
        next: res => {
          this.msgService.add({
            severity: 'success',
            summary: 'You are Downgraded!',
            detail: 'Downgraded!',
          });
          window.location.reload();
        },
        error: err => {
          this.msgService.add({
            severity: 'danger',
            summary: 'Not-LoggedIn',
            detail: 'Login!',
          });
        }
      })
    }
    else if(this.user.role === "nonpremiumuser"){
      this.profileService.updateRole("upgrade").subscribe({
        next: res => {
          this.msgService.add({
            severity: 'success',
            summary: 'You are Upgraded!',
            detail: 'Upgraded!',
          });
          window.location.reload();
        },
        error: err => {
          this.msgService.add({
            severity: 'danger',
            summary: 'Not-LoggedIn',
            detail: 'Login!',
          });
        }
      })
    }
  }

  sendMessage(form: NgForm) {
    if(form.valid){
      const user_message = form.value.inp_message;
      this.profileService.sendMessage(user_message).subscribe({
       next: res => {
        this.msgService.add({
          severity: 'success',
          summary: 'Your message sent to Admin!',
          detail: 'Sent!',
        });
       },
       error: err => {
        this.msgService.add({
          severity: 'danger',
          summary: 'Some Error Occured!',
          detail: 'Try Again Later!',
        });
       }
      })
    }
  }
  
  addMessage(){
    this.overlayVisible = !this.overlayVisible;
  }

  cardOpener(
    title: string,
    description: string,
    actionText: string,
    routeTarget: string
  ) {
    this.openerCmp = this.vcr.createComponent(OpenerComponent);
    this.openerCmp.instance.title = title;
    this.openerCmp.instance.description = description;
    this.openerCmp.instance.actionText = actionText;
    this.openerCmp.instance.routeTarget = routeTarget;

    this.openerCmp.instance.close.subscribe(() => {
      this.vcr.clear();
      this.roleSub.unsubscribe();
    });
  }
}
