import { Component, ViewContainerRef } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { AuthService } from './auth.service';
import { OpenerComponent } from '../shared/openers/opener.component';
import { MessageService } from 'primeng/api';
import { SpinnerIcon } from 'primeng/icons/spinner';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css',
})
export class AuthComponent {
  constructor(
    private authService: AuthService,
    private vcr: ViewContainerRef,
    private msgService: MessageService,
    private router: Router
  ) {}
  isLoginMode = true;
  isLoading = true;
  showSpinner = false;
  loginPrompt;

  onSubmit(authForm: NgForm) {
    if (!authForm.valid) {
      return;
    }
    this.showSpinner = true;
    const username = authForm.value.username;
    const password = authForm.value.password;
    if (this.isLoginMode) {
      this.authService.login(username, password).subscribe({
        next: resp => {
          this.showSpinner = false;
          sessionStorage.setItem('access_token', resp.access_token);
          sessionStorage.setItem('refresh_token', resp.refresh_token);
          this.showError('Success', 'Success', 'Login Successful');
          this.router.navigateByUrl('');
        },
        error: errorRes => {
          this.showSpinner = false;
          this.showError('danger', 'Error', 'Authentication Unsuccessful');
        },
      });
    } else {
      this.authService.signup(username, password).subscribe((res) => {
        this.showSpinner = false;
        this.loginPrompt = this.vcr.createComponent(OpenerComponent);
        this.loginPrompt.instance.title = 'Login Now';
        this.loginPrompt.instance.description = '';
        this.loginPrompt.instance.actionText = 'Proceed';
        console.log(res);
      });
    }
    authForm.reset();
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
