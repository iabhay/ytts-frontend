import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent implements OnInit, OnDestroy{
  isLoggedIn = false;

  constructor(private router:Router, private authService: AuthService){} 

  ngOnInit(){
    this.authService.loggedin.subscribe(res => {
      this.isLoggedIn = res;
    });
  }
  logoutMe(){
    this.authService.logout().subscribe(res => {
      console.log(res);
    })
    this.isLoggedIn = false;
    this.router.navigate(['auth']);
  }

  ngOnDestroy(){}
}
