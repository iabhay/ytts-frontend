import {
  Component,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
})
export class NavComponent implements OnInit, OnDestroy {
  isLoggedIn = false;

  constructor(
    private router: Router,
    private authService: AuthService,
    private msgService: MessageService
  ) {}

  ngOnInit() {
    this.authService.loggedin.subscribe((res) => {
      this.isLoggedIn = res;
    });
  }
  logoutMe() {
    this.authService.logout().subscribe((res) => {
      this.isLoggedIn = false;
      this.msgService.add({
        severity: 'Success',
        summary: 'Logout Successfull!',
        detail: 'Successfully logged out!',
      });
      this.router.navigate(['auth']);
    });
  }

  ngOnDestroy() {}
}
