import {createReducer, on} from '@ngrx/store';
import {accessTokenGrantedAction, requestAccessTokenAction, searchSuccessAction} from './app.actions';
import {Albums} from '../album';

export interface AppState {
    accessToken: string;
    albums: Albums;
}

export const initialState: AppState = {
    accessToken: null,
    albums: [],
};

// tslint:disable-next-line:variable-name
const _appReducer = createReducer(
    initialState,
    on(accessTokenGrantedAction, (state, { accessToken }) => ({ ...state, accessToken })),
    on(searchSuccessAction, (state, { albums }) => ({ ...state, albums }))
);

export function appReducer(state, action) {
    return _appReducer(state, action);
}
