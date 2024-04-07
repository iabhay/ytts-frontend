import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { MessageService } from 'primeng/api';
import { JWTService } from '../shared/services/jwt.service';

export const adminGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const msgService = inject(MessageService);
  const tokenService = inject(JWTService);
  const token = sessionStorage.getItem('access_token');
  const role = tokenService.getRoleFromToken(token);

  if (role === 'admin') {
    return true;
  } else {
    msgService.add({
      severity: 'danger',
      summary: 'Access Restricted!',
      detail: 'You can not access.',
    });
    router.navigate(['']);
    return false;
  }
};
