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
      'http://127.0.0.1:5000/premiumlist';
    return this.http.get(reqUrl);
  }

  fetchHistory() {
    const reqUrl =
      'http://127.0.0.1:5000/history';
    return this.http.get(reqUrl);
  }

  fetchHistoryByAdmin(user_id) {
    const reqUrl =
      'http://127.0.0.1:5000/history?user_id=' +
      user_id;
    return this.http.get(reqUrl);
  }

  fetchPremiumListingsByAdmin(user_id) {
    const reqUrl =
      'http://127.0.0.1:5000/premiumlist?user_id=' +
      user_id;
    return this.http.get(reqUrl);
  }

  premiumListingRequest(inp_url) {
    const reqUrl =
      'http://127.0.0.1:5000/premiumlist-request';
    return this.http.post<responseModel>(reqUrl, {
      youtube_url: inp_url,
    });
  }
  addPremiumListing(user_id, inp_url) {
    const reqUrl =
      'http://127.0.0.1:5000/premiumlist';
    return this.http.post<responseModel>(reqUrl, {
        user_id: user_id,
        youtube_url: inp_url,
    }).pipe(catchError(err => throwError(err)));
  }
}
