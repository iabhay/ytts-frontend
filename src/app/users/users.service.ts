import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({providedIn: 'root'})
export class UserService {
    constructor(private http: HttpClient, private router: Router){
    }

    premiumlist(user_id, url_inp){
        const data = {
            'user_id': user_id,
            'youtube_url': url_inp
        }
        const reqUrl = 'https://youtube-transcript-summarizer-pzc3.onrender.com/premiumlist';
        return this.http.post(reqUrl, data);
    }

    fetchPremiumlist(user_id){
        const params = new HttpParams();
        params.append('user_id', user_id);
        const reqUrl = 'https://youtube-transcript-summarizer-pzc3.onrender.com/premiumlist';
        return this.http.get(reqUrl, {params: params});   
    }

    fetchUsers(){
        const reqUrl = 'https://youtube-transcript-summarizer-pzc3.onrender.com/users';
        return this.http.get(reqUrl);
    }


    fetchUser(user_id){
        const params = new HttpParams();
        params.append('user_id', user_id);
        const reqUrl = 'https://youtube-transcript-summarizer-pzc3.onrender.com/user/profile';
        return this.http.get(reqUrl, {params: params});
    }

    upgrade_user(user_id){
        const params = new HttpParams();
        params.append('user_id', user_id);
        const reqUrl = 'https://youtube-transcript-summarizer-pzc3.onrender.com/upgrade';
        return this.http.put(reqUrl, {params: params});
    }

    downgrade_user(user_id){
        const params = new HttpParams();
        params.append('user_id', user_id);
        const reqUrl = 'https://youtube-transcript-summarizer-pzc3.onrender.com/downgrade';
        return this.http.put(reqUrl, {params: params});
    }

    ban_user(user_id){
        const params = new HttpParams();
        params.append('user_id', user_id);
        const reqUrl = 'https://youtube-transcript-summarizer-pzc3.onrender.com/user/ban';
        return this.http.put(reqUrl, {params: params});
    }

    
    unban_user(user_id){
        const params = new HttpParams();
        params.append('user_id', user_id);
        const reqUrl = 'https://youtube-transcript-summarizer-pzc3.onrender.com/user/unban';
        return this.http.put(reqUrl, {params: params});
    }

    
    ban_url(url_inp){
        const data = {
            'youtube_url': url_inp
        };
        const reqUrl = 'https://youtube-transcript-summarizer-pzc3.onrender.com/url/ban';
        return this.http.post(reqUrl, data);
    }

     
    view_ban_urls(){
        const reqUrl = 'https://youtube-transcript-summarizer-pzc3.onrender.com/urls';
        return this.http.get(reqUrl);
    }

    
    unban_url(url_inp){
        const data = {
            'youtube_url': url_inp
        };
        const reqUrl = 'https://youtube-transcript-summarizer-pzc3.onrender.com/url/unban';
        return this.http.delete(reqUrl, {body : data});
    }

    fetchMessages(){
        const reqUrl = 'https://youtube-transcript-summarizer-pzc3.onrender.com/messages';
        return this.http.get(reqUrl);
    }

    fetchUserMessages(user_id){
        const params = new HttpParams();
        params.append('user_id', user_id);
        const reqUrl = 'https://youtube-transcript-summarizer-pzc3.onrender.com/messages';
        return this.http.get(reqUrl);
    }

    fetchUserTypeMessages(user_type){
        const params = new HttpParams();
        params.append('user_id', user_type);
        const reqUrl = 'https://youtube-transcript-summarizer-pzc3.onrender.com/messages';
        return this.http.get(reqUrl);
    }

    send_message(description){
        const data = {
            'description': description
        }
        const reqUrl = 'https://youtube-transcript-summarizer-pzc3.onrender.com/message';
        return this.http.post(reqUrl, data);
    }

    fetchAllHistory(){
        const reqUrl = 'https://youtube-transcript-summarizer-pzc3.onrender.com/history/all';
        return this.http.get(reqUrl);
    }

    fetchUserHistory(user_id){
        const params = new HttpParams();
        params.append('user_id', user_id);
        const reqUrl = 'https://youtube-transcript-summarizer-pzc3.onrender.com/history';
        return this.http.get(reqUrl, {params: params});
    }

    // fetchUsersByUserType(user_type){
    //     const params = new HttpParams();
    //     params.append('user_type', user_type);
    //     const reqUrl = 'https://youtube-transcript-summarizer-pzc3.onrender.com/users';
    //     return this.http.get(reqUrl, {params: params});
    // }

}
