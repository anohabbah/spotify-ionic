import {createAction, props} from '@ngrx/store';
import {Albums} from '../album';

export const requestAccessTokenAction = createAction('[SPOTIFY] requestAccessToken');
export const accessTokenGrantedAction = createAction('[SPOTIFY] accessTokenGranted', props<{accessToken: string}>());

export const searchAction = createAction('[SPOTIFY] search', props<{ query: string }>());
export const searchSuccessAction = createAction('[SPOTIFY] search success', props<{ albums: Albums }>());
