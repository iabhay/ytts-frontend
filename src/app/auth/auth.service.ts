import { HttpClient, HttpErrorResponse, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject, catchError, tap, throwError } from "rxjs";

import { Router } from "@angular/router";
import { User } from "./user.model";

export interface AuthResponseData{
    access_token: string;
    refresh_token: string;
    message: string;
}

export interface SignUpResponseData{
    message: string;
    username: string;
}

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    // user = new Subject<User>();
    user = new BehaviorSubject<User>(null);
    private tokenExpirationTimer: any;

    constructor(private http: HttpClient, private router: Router){
    }

    signup(username: string, password: string){
        const reqUrl = 'https://youtube-transcript-summarizer-pzc3.onrender.com/signup';

        return this.http.post<SignUpResponseData>(reqUrl,
        {
            username: username,
            password: password,
        })
        // .pipe(catchError(this.handleError), tap(resData =>{
        //     this.handleAuthetication(resData)
        // }));
    }

    login(username: string, password: string){
        const reqUrl = 'https://youtube-transcript-summarizer-pzc3.onrender.com/login';

        return this.http.post<AuthResponseData>(reqUrl, 
        {
            username: username,
            password: password
        })
        .pipe(catchError(this.handleError));
    }

    // autoLogin(){
    //     const userData: {
    //         username: string, 
    //         role: string, 
    //         status: string,
    //         createdAt: string,
    //         searchCounts: string,
    //         _token: string,
    //         _tokenExpirationDate: Date
    //     } = JSON.parse(localStorage.getItem('userData'));
    //     if(!userData){
    //         return;
    //     }
    //     const loadedUser = new User(userData.username, userData.role, userData.status, userData.createdAt, userData.searchCounts, userData._token, userData._tokenExpirationDate);

    //     if(loadedUser.token){
    //         this.user.next(loadedUser);
    //         const expTime = new Date(userData._tokenExpirationDate).getTime() - new Date().getTime();
    //         this.autoLogout(expTime);
    //     }
    // }

    // logout(){
    //     this.user.next(null);
    //     this.router.navigate(['/auth']);
    //     localStorage.removeItem('userData');
    //     if(this.tokenExpirationTimer){
    //         clearTimeout(this.tokenExpirationTimer);
    //     }
    //     this.tokenExpirationTimer = null;
    // }

    // autoLogout(expirationDuration: number){
    //     this.tokenExpirationTimer = setTimeout(()=>{
    //         this.logout();
    //     }, expirationDuration);
    //     // this.tokenExpirationTimer = setTimeout(()=>{
    //     //     this.logout();
    //     // }, 2000);
    // }

    private handleError(errorRes: HttpErrorResponse){
        let errorMessage = errorRes.message;
        // if(!errorRes.error || !errorRes.error.error){
        //     throwError(()=>errorMessage);
        // }
        // switch(errorRes.error.error.message){
        //     case 'EMAIL_EXISTS':
        //         errorMessage = 'This email exists already';
        //         break;
        //     case 'INVALID_LOGIN_CREDENTIALS':
        //         errorMessage = 'User not exist';
        //         break;
        //     case 'EMAIL_NOT_FOUND':
        //         errorMessage = 'User not found';
        //     case 'INVALID_PASSWORD':
        //         errorMessage = 'Invalid password';
        //         break;
        //     case 'USER_DISABLED':
        //         errorMessage = 'User banned by admin';
        //         break;
        // }
        return throwError(()=>errorMessage);
    }
}