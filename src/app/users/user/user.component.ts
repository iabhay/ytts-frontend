import { Component, DoCheck, OnChanges, OnInit, ViewContainerRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from '../users.service';
import { ActivatedRoute, OnSameUrlNavigation } from '@angular/router';
import { OverlayComponent } from '../../shared/overlay/overlay.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit, OnChanges, DoCheck{
  users;
  openerCmp;
  counter = 0;
  newCounter;
  constructor(private userService: UserService, private route: ActivatedRoute, private vcr: ViewContainerRef){}

  ngOnInit() {
    
  }

  ngDoCheck() {
    
  }
  
  ngOnChanges(){
    const routeTarget = this.route.url
    const target = routeTarget[0].path;
    if(target === 'all'){
      this.userService.fetchUsers().subscribe(res => {
        this.users = res;
      })
    }
    else if(target === 'user'){
      this.cardOpener();
      // this.userService.fetchUser(user_id).subscribe(res => {
      //   this.users = res;
      // })
    }
  }

  customSort(event){}

  cardOpener(){
    this.openerCmp = this.vcr.createComponent(OverlayComponent);
    this.openerCmp.instance.close.subscribe(() => {
      this.vcr.clear();
    });
}
}