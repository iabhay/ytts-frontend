import { Component } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {

  // isAuthenticated = false;
  // private userSub: Subscription;

  // ngOnInit(){
  //   this.userSub = this.authService.user.subscribe(user => {
  //     this.isAuthenticated = !!user;
  //   })
  // }

  // onLogout(){
  //   this.authService.logout();
  // }
}
