import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {}

  requestAccessToken() {
    const bufferString = `${environment.clientId}:${environment.clientSecret}`;
    const buffer = btoa(bufferString);
    const headers: HttpHeaders = new HttpHeaders({
      Authorization: 'Basic ' + buffer,
      'Content-Type': 'application/x-www-form-urlencoded',
      Accept: 'application/json',
    });

    const params = new URLSearchParams();
    params.append('grant_type', 'client_credentials');

    return this.http.post('https://accounts.spotify.com/api/token', params.toString(), { headers });
  }
}
