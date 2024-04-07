import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { MessageService } from 'primeng/api';
import { JWTService } from '../shared/services/jwt.service';

export const banGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const msgService = inject(MessageService);
  const tokenService = inject(JWTService);
  const token = sessionStorage.getItem('access_token');

  const role = tokenService.getBanStatusFromToken(token);
  if (role === 'unbanned') {
    return true;
  } else {
    msgService.add({
      severity: 'danger',
      summary: 'You are Banned!',
      detail: 'You can not access.',
    });
    router.navigate(['/banned']);
    return false;
  }
};
