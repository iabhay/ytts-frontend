import {
  HttpClient,
  HttpErrorResponse,
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

  constructor(private http: HttpClient, private router: Router, private jwt_service: JWTService) {}

  signup(username: string, password: string) {
    const reqUrl =
      'https://youtube-transcript-summarizer-pzc3.onrender.com/signup';

    return this.http
      .post<SignUpResponseData>(reqUrl, {
        username: username,
        password: password,
      })
      .pipe(catchError(this.handleError));
  }

  login(username: string, password: string) {
    const reqUrl =
      'https://youtube-transcript-summarizer-pzc3.onrender.com/login';
    return this.http
      .post<AuthResponseData>(reqUrl, {
        username: username,
        password: password,
      })
      .pipe(
        catchError(this.handleError),
        tap((res) => {
          this.loggedin.next(true);
        })
      );
  }

  logout() {
    this.loggedin.next(false);
    sessionStorage.clear();
    const req_url = 'https://youtube-transcript-summarizer-pzc3.onrender.com';
    return this.http.post(req_url, {});
  }

  private handleError(errorRes: HttpErrorResponse) {
    this.loggedin.next(false);
    let errorMessage = errorRes.message;
    return throwError(() => errorMessage);
  }
}
