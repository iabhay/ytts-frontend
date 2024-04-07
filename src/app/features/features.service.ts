import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';


interface responseModel{
    message: string;
}

@Injectable({ providedIn: 'root' })
export class FeatureService {
  constructor(private http: HttpClient, private router: Router) {}

  fetchPremiumListings() {
    const reqUrl =
      'https://youtube-transcript-summarizer-pzc3.onrender.com/premiumlist';
    return this.http.get(reqUrl);
  }

  fetchHistory() {
    const reqUrl =
      'https://youtube-transcript-summarizer-pzc3.onrender.com/history';
    return this.http.get(reqUrl);
  }

  fetchHistoryByAdmin(user_id) {
    const reqUrl =
      'https://youtube-transcript-summarizer-pzc3.onrender.com/history?user_id=' +
      user_id;
    return this.http.get(reqUrl);
  }

  fetchPremiumListingsByAdmin(user_id) {
    const reqUrl =
      'https://youtube-transcript-summarizer-pzc3.onrender.com/premiumlist?user_id=' +
      user_id;
    return this.http.get(reqUrl);
  }

  premiumListingRequest(inp_url) {
    const reqUrl =
      'https://youtube-transcript-summarizer-pzc3.onrender.com/premiumlist-request';
    return this.http.post<responseModel>(reqUrl, {
      youtube_url: inp_url,
    });
  }
  addPremiumListing(user_id, inp_url) {
    const reqUrl =
      'https://youtube-transcript-summarizer-pzc3.onrender.com/premiumlist';
    return this.http.post<responseModel>(reqUrl, {
        user_id: user_id,
        youtube_url: inp_url,
    }).pipe(catchError(err => throwError(err)));
  }
}
