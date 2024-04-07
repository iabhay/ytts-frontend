import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, tap, throwError } from 'rxjs';

import { Router } from '@angular/router';
import { JWTService } from '../shared/services/jwt.service';

export interface AuthResponseData {
  access_token: string;
  refresh_token: string;
  message: string;
}

export interface SignUpResponseData {
  message: string;
  username: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  loggedin = new BehaviorSubject(null);
  headers = new HttpHeaders();

  constructor(
    private http: HttpClient,
    private router: Router,
    private jwt_service: JWTService
  ) {
    this.headers.append('x-intercept', 'false');
  }

  signup(username: string, password: string) {
    const reqUrl =
      'https://youtube-transcript-summarizer-pzc3.onrender.com/signup';

    return this.http
      .post<SignUpResponseData>(
        reqUrl,
        {
          username: username,
          password: password,
        },
        { headers: this.headers }
      )
      .pipe(catchError(this.handleError));
  }

  login(username: string, password: string) {
    const reqUrl =
      'https://youtube-transcript-summarizer-pzc3.onrender.com/login';
    return this.http
      .post<AuthResponseData>(
        reqUrl,
        {
          username: username,
          password: password,
        },
        { headers: this.headers }
      )
      .pipe(
        catchError(this.handleError),
        tap((res) => {
          this.loggedin.next(true);
        })
      );
  }

  logout() {
    const req_url = 'https://youtube-transcript-summarizer-pzc3.onrender.com/logout';
    return this.http.post(req_url, {}, { headers: this.headers }).pipe(
      catchError(this.handleError),
      tap((res) => {
        sessionStorage.clear();
        this.loggedin.next(false);
      })
    );
  }

  private handleError(errorRes: HttpErrorResponse) {
    this.loggedin.next(false);
    let errorMessage = errorRes.message;
    return throwError(() => errorMessage);
  }
}
