import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { FeatureService } from "../../features/features.service";

@Injectable({providedIn: 'root'})
export class RoleChangeService{

    constructor(private http: HttpClient, private router: Router, private featureService: FeatureService){
        
    }

    upgradeRole(){
        const reqUrl = 'https://youtube-transcript-summarizer-pzc3.onrender.com/upgrade';
        return this.http.put(reqUrl, {
        });
    }
}