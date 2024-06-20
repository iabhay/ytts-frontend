import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class TranscriptService {
  constructor(private http: HttpClient, private router: Router) {}

  fetchSummary(youtube_url) {
    const reqUrl =
      'http://127.0.0.1:5000/summary';
    return this.http.post(reqUrl, {
      youtube_url: youtube_url,
    });
  }
}
