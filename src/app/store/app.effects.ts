import {SpotifyService} from '../spotify.service';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {accessTokenGrantedAction, requestAccessTokenAction, searchAction, searchSuccessAction} from './app.actions';
import {catchError, exhaustMap, map, switchMap} from 'rxjs/operators';
import {EMPTY} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable()
export class AppEffects {
    requestAccessToken$ = createEffect(() => this.actions$.pipe(
        ofType(requestAccessTokenAction),
        exhaustMap(() => this.service.requestAccessToken().pipe(
            map((data: { access_token: string }) => accessTokenGrantedAction({accessToken: data.access_token })),
            catchError(() => EMPTY)
        ))
    ));

    search$ = createEffect(() => this.actions$.pipe(
        ofType(searchAction),
        switchMap(({ query }) => {
            if (query === '') {
                return EMPTY;
            }

            return this.service.searchAlbumByAlbumNameOrArtistName(query).pipe(
                map(albums => searchSuccessAction({ albums }))
            );
        })
    ));

    constructor(private service: SpotifyService, private actions$: Actions) {}
}
