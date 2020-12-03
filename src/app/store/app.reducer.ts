import {createReducer, on} from '@ngrx/store';
import {accessTokenGranted, requestAccessToken} from './app.actions';

export interface AppState {
    accessToken: string;
}

export const initialState: AppState = {
    accessToken: null,
};

// tslint:disable-next-line:variable-name
const _appReducer = createReducer(
    initialState,
    on(accessTokenGranted, (state, { accessToken }) => ({ ...state, accessToken }))
);

export function appReducer(state, action) {
    return _appReducer(state, action);
}
