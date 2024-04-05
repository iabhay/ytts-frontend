import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { MessageService } from 'primeng/api';
 
export const loginGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const msgService = inject(MessageService);
 
  const token = sessionStorage.getItem('access_token');
 
  if (token !== null) {
    return true;
  } else {
    msgService.add({
        severity: 'danger',
        summary: 'Not Logged-In',
        detail: 'Login to Continue!',
      });
    router.navigate(['auth']);
    return false;
  }
};