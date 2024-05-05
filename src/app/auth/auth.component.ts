import {
  Component,
  OnDestroy,
  OnInit,
  Output
} from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { AuthService } from './auth.service';
import { MessageService } from 'primeng/api';
import { SpinnerIcon } from 'primeng/icons/spinner';
import { Router } from '@angular/router';
import { BehaviorSubject, Subscription } from 'rxjs';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css',
})
export class AuthComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private msgService: MessageService,
    private router: Router
  ) {}

  loggedIn = false;
  isLoginMode = true;
  isLoading = true;
  showSpinner = false;
  loginPrompt;
  loginSub: Subscription;
  ngOnInit(): void {
    this.authService.loggedin.subscribe((res) => {
      this.loggedIn = res;
    });
  }

  onSubmit(authForm: NgForm) {
    if (!authForm.valid) {
      return;
    }
    this.showSpinner = true;
    const username = authForm.value.username;
    const password = authForm.value.password;
    if (this.isLoginMode) {
      this.loginSub = this.authService.login(username, password).subscribe({
        next: (resp) => {
          this.showSpinner = false;
          sessionStorage.setItem('access_token', resp.access_token);
          sessionStorage.setItem('refresh_token', resp.refresh_token);
          this.showError('Success', 'Success', 'Login Successful');
          this.router.navigateByUrl('');
        },
        error: (errorRes) => {
          this.showSpinner = false;
          this.showError('danger', 'Error', 'Authentication Unsuccessful');
          this.loginSub.unsubscribe();
        },
      });
    } else {
      this.loginSub = this.authService.signup(username, password).subscribe({
        next: (res) => {
          this.showSpinner = false;
          this.showError(
            'success',
            'Signup Successful',
            'Authentication Successful'
          );
        },
        error: (error) => {
          this.loginSub.unsubscribe();
          this.showError('danger', 'Error', 'Authentication Unsuccessful');
        },
      });
      authForm.reset();
    }
  }
  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  showError(severity, summary, detail) {
    this.msgService.add({
      severity: severity,
      summary: summary,
      detail: detail,
    });
  }
}
