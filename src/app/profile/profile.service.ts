import {
  HttpClient,
  HttpErrorResponse
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor(private http: HttpClient, private router: Router) {}

  profileData() {
    const reqUrl =
      'http://127.0.0.1:5000/user/profile';
    return this.http.get(reqUrl).pipe(catchError(this.handleError));
  }

  private handleError(errorRes: HttpErrorResponse) {
    let errorMessage = errorRes.message;
    return throwError(() => errorMessage);
  }

  saveRes(resData) {
    const res = JSON.stringify(resData);
    sessionStorage.setItem('user', res);
    return resData;
  }

  updateRole(userType: String){
    const reqUrl =
      'http://127.0.0.1:5000/'+userType;
    return this.http.put(reqUrl,{}).pipe(catchError(this.handleError));
  }

  sendMessage(userMessage){
    const reqUrl =
      'http://127.0.0.1:5000/message';
    return this.http.post(reqUrl, userMessage).pipe(catchError(this.handleError));
  }
}
