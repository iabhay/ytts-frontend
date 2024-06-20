import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';

interface successResponse {
  access_token: string;
  refresh_token: string;
  message: string;
}

interface errorResponse {
  message: string;
}
@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private http: HttpClient, private router: Router) {}

  premiumlist(user_id, url_inp) {
    const data = {
      user_id: user_id,
      youtube_url: url_inp,
    };
    const reqUrl =
      'http://127.0.0.1:5000/premiumlist';
    return this.http
      .post(reqUrl, data)
      .pipe(catchError((err) => this.handleError(err)));
  }

  fetchPremiumlist(user_id) {
    const params = new HttpParams();
    params.append('user_id', user_id);
    const reqUrl =
      'http://127.0.0.1:5000/premiumlist';
    return this.http
      .get(reqUrl, { params: params })
      .pipe(catchError((err) => this.handleError(err)));
  }

  fetchUsers() {
    const reqUrl =
      'http://127.0.0.1:5000/users';
    return this.http
      .get(reqUrl)
      .pipe(catchError((err) => this.handleError(err)));
  }

  fetchUser(user_id) {
    const params = new HttpParams();
    params.append('user_id', user_id);
    const reqUrl =
      'http://127.0.0.1:5000/user/profile';
    return this.http
      .get(reqUrl, { params: params })
      .pipe(catchError((err) => this.handleError(err)));
  }

  upgrade_user(user_id) {
    const reqUrl =
      'http://127.0.0.1:5000/upgrade?user_id=' +
      user_id;
    return this.http
      .put<successResponse | errorResponse>(reqUrl, {})
      .pipe(catchError((err) => this.handleError(err)));
  }

  downgrade_user(user_id) {
    const reqUrl =
      'http://127.0.0.1:5000/downgrade?user_id=' +
      user_id;
    return this.http
      .put<successResponse | errorResponse>(reqUrl, {})
      .pipe(catchError((err) => this.handleError(err)));
  }

  ban_user(user_id) {
    const reqUrl =
      'http://127.0.0.1:5000/user/ban?user_id=' +
      user_id;
    return this.http
      .put<successResponse | errorResponse>(reqUrl, {})
      .pipe(catchError((err) => this.handleError(err)));
  }

  unban_user(user_id) {
    const reqUrl =
      'http://127.0.0.1:5000/user/unban?user_id=' +
      user_id;
    return this.http
      .put<successResponse | errorResponse>(reqUrl, {}, {})
      .pipe(catchError((err) => this.handleError(err)));
  }

  ban_url(url_inp) {
    const data = {
      youtube_url: url_inp,
    };
    const reqUrl =
      'http://127.0.0.1:5000/url/ban';
    return this.http
      .post<errorResponse>(reqUrl, data)
      .pipe(catchError((err) => this.handleError(err)));
  }

  view_ban_urls() {
    const reqUrl =
      'http://127.0.0.1:5000/urls';
    return this.http
      .get(reqUrl)
      .pipe(catchError((err) => this.handleError(err)));
  }

  unban_url(url_inp) {
    const data = {
      youtube_url: url_inp,
    };
    const reqUrl =
      'http://127.0.0.1:5000/url/unban';
    return this.http
      .delete<errorResponse>(reqUrl, { body: data })
      .pipe(catchError((err) => this.handleError(err)));
  }

  fetchMessages() {
    const reqUrl =
      'http://127.0.0.1:5000/messages';
    return this.http
      .get(reqUrl)
      .pipe(catchError((err) => this.handleError(err)));
  }

  fetchUserMessages(user_id) {
    const params = new HttpParams();
    params.append('user_id', user_id);
    const reqUrl =
      'http://127.0.0.1:5000/messages';
    return this.http
      .get(reqUrl)
      .pipe(catchError((err) => this.handleError(err)));
  }

  fetchUserTypeMessages(user_type) {
    const params = new HttpParams();
    params.append('user_id', user_type);
    const reqUrl =
      'http://127.0.0.1:5000/messages';
    return this.http
      .get(reqUrl)
      .pipe(catchError((err) => this.handleError(err)));
  }

  send_message(description) {
    const data = {
      description: description,
    };
    const reqUrl =
      'http://127.0.0.1:5000/message';
    return this.http
      .post(reqUrl, data)
      .pipe(catchError((err) => this.handleError(err)));
  }

  fetchAllHistory() {
    const reqUrl =
      'http://127.0.0.1:5000/history/all';
    return this.http
      .get(reqUrl)
      .pipe(catchError((err) => this.handleError(err)));
  }

  fetchUserHistory(user_id) {
    const params = new HttpParams();
    params.append('user_id', user_id);
    const reqUrl =
      'http://127.0.0.1:5000/history';
    return this.http
      .get(reqUrl, { params: params })
      .pipe(catchError((err) => this.handleError(err)));
  }

  handleError(err) {
    return throwError(err);
  }
}
