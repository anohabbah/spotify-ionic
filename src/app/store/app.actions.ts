import {createAction, props} from '@ngrx/store';

export const requestAccessToken = createAction('[SPOTIFY] requestAccessToken');
export const accessTokenGranted = createAction('[SPOTIFY] accessTokenGranted', props<{accessToken: string}>());
