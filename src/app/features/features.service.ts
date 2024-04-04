import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({providedIn: 'root'})
export class FeatureService {
    constructor(private http: HttpClient, private router: Router){
    }

    fetchPremiumListings(){
        const reqUrl = 'https://youtube-transcript-summarizer-pzc3.onrender.com/premiumlist';
        return this.http.get(reqUrl);
    }

    fetchHistory(){
        const reqUrl = 'https://youtube-transcript-summarizer-pzc3.onrender.com/history';
        return this.http.get(reqUrl);
    }
}