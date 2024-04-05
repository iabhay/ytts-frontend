import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { OpenerComponent } from '../shared/openers/opener.component';
import { Subscription } from 'rxjs';
import { RoleChangeService } from './role-change/role-change.service';
import { ProfileService } from './profile.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit{
  user : any = {
    ban_status : 'unbanned',
    created_at : '10/10/2023',
    date_time: 12/12/2023,
    role: 'Non Premium User',
    search_count: 2,
    uid: 'U1234',
    username: 'Abhay'
  };
  roleSub : Subscription;
  profileSub: Subscription;
  openerCmp;

  constructor(private vcr: ViewContainerRef, private roleChange: RoleChangeService, private profileService: ProfileService, private msgService: MessageService, private router: Router){}

  ngOnInit() {
    this.profileService.profileData().subscribe({next: res =>{
      console.log(res);
      this.user = res;
    },
    error: error => {
      this.msgService.add({ severity: 'danger', summary: 'Error', detail: 'Some Error Occurred!' });
    }
  });
    // this.roleChange.upgradeRole();
  }


  updateRole(){
    this.router.navigate(['role-change']);
    // const title = 'Are you sure?';
    // const description = 'This will charge you Rs. 59/Month';
    // const actionText = 'Proceed';
    // const routeTarget = 'role-change';
    // this.cardOpener(title,description,actionText, routeTarget);
  }

  sendMessage(){
    
  }

  cardOpener(title: string, description: string, actionText: string, routeTarget: string){
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
