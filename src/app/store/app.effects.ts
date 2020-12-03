import {SpotifyService} from '../spotify.service';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {accessTokenGranted, requestAccessToken} from './app.actions';
import {catchError, exhaustMap, map } from 'rxjs/operators';
import {EMPTY} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable()
export class AppEffects {
    requestAccessToken$ = createEffect(() => this.actions$.pipe(
        ofType(requestAccessToken),
        exhaustMap(() => this.service.requestAccessToken().pipe(
            map((data: { access_token: string }) => accessTokenGranted({accessToken: data.access_token })),
            catchError(() => EMPTY)
        ))
    ));

    constructor(private service: SpotifyService, private actions$: Actions) {}
}
