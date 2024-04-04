import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { User } from "../auth/user.model";
import { catchError, tap, throwError } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ProfileService{
    constructor(private http: HttpClient, private router: Router){}

    profileData(){
    const reqUrl = 'https://youtube-transcript-summarizer-pzc3.onrender.com/user/profile';
    return this.http.get(reqUrl)
        .pipe(catchError(this.handleError));
    }

    private handleError(errorRes: HttpErrorResponse){
        console.log(errorRes);
        let errorMessage = errorRes.message;
        return throwError(()=>errorMessage);
    }

    saveRes(resData){
        const res = JSON.stringify(resData);
        sessionStorage.setItem('user', res);
        return resData;
    }

}