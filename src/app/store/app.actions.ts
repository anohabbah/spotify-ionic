import {createAction, props} from '@ngrx/store';
import {Album, Albums} from '../album.interface';

export const requestAccessTokenAction = createAction('[SPOTIFY] requestAccessToken');
export const accessTokenGrantedAction = createAction('[SPOTIFY] accessTokenGranted', props<{accessToken: string}>());

export const searchAction = createAction('[SPOTIFY] search', props<{ query: string }>());
export const searchSuccessAction = createAction('[SPOTIFY] search success', props<{ albums: Albums }>());

export const bookmarkUpdateAction = createAction('[LIBRARY] bookmark update', props<{ payload: Album }>());
export const favoritesUpdateAction = createAction('[FAVORITES] favoriteS update', props<{ payload: Album }>());
