import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';

export class ProfileInterceptor implements HttpInterceptor {
  authService = inject(AuthService);
  router = inject(Router);

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const access_token = sessionStorage.getItem('access_token');
    // if(!access_token){
    //     this.router.navigate(['auth']);
    //     return throwError(() => 'Not Logged In');  
    // }
    const authorizedRequest = req.clone({
      headers: req.headers.append('Authorization', `Bearer ${access_token}`),
    });
    return next
      .handle(authorizedRequest)
      .pipe(catchError((err) => this.handleError(err)));
  }

  private handleError(errorRes: HttpErrorResponse) {
    let errorStatus = errorRes.status;
    let errorMessage = errorRes.error.message;
    if (errorStatus === 401) {
      this.authService.logout();
      this.router.navigate(['auth']);
    }
    return throwError(() => errorMessage);
  }
}
