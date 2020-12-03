import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../environments/environment';
import {AppState} from './store/app.reducer';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  accessToken: string;

  constructor(private http: HttpClient, private store: Store<{ app: AppState }>) {
    this.store
        .select(state => state.app)
        .subscribe(({ accessToken }) => {
          this.accessToken = accessToken;
        });
  }

  requestAccessToken(): Observable<{ access_token: string }> {
    const bufferString = `${environment.clientId}:${environment.clientSecret}`;
    const buffer = btoa(bufferString);
    const headers: HttpHeaders = new HttpHeaders({
      Authorization: 'Basic ' + buffer,
      'Content-Type': 'application/x-www-form-urlencoded',
      Accept: 'application/json',
    });

    const params = new URLSearchParams();
    params.append('grant_type', 'client_credentials');

    return this.http.post<{ access_token: string }>('https://accounts.spotify.com/api/token', params.toString(), { headers });
  }

  searchAlbumByAlbumNameOrArtistName(searchTerm): Observable<[]> {
    return this.http.get('https://api.spotify.com/v1/search', {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + this.accessToken,
      }),
      params: {
        q: searchTerm,
        type: 'album',
        limit: '20',
      },
    }).pipe(map((data: { albums }) => data.albums.items));
  }
}
