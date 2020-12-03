import cloneDeep from 'lodash/cloneDeep';
import unset from 'lodash/unset';
import set from 'lodash/set';
import has from 'lodash/has';
import {createReducer, on} from '@ngrx/store';

import {accessTokenGrantedAction, bookmarkUpdateAction, favoritesUpdateAction, searchSuccessAction} from './app.actions';
import {Album, Albums, Library} from '../album.interface';

export interface AppState {
    accessToken: string;
    albums: Albums;
    library: Library;
    favorites: Library;
}

export const initialState: AppState = {
    accessToken: null,
    albums: [],
    library: {},
    favorites: {},
};

// tslint:disable-next-line:variable-name
const _appReducer = createReducer(
    initialState,
    on(accessTokenGrantedAction, (state, { accessToken }) => ({ ...state, accessToken })),
    on(searchSuccessAction, (state, { albums }) => ({ ...state, albums })),
    on(bookmarkUpdateAction, (state, { payload }) => computeState(state, payload, 'library')),
    on(favoritesUpdateAction, (state, { payload }) => computeState(state, payload, 'favorites')),
);

function computeState(state: AppState, album: Album, data: string): AppState {
    const newState = cloneDeep(state[data]);
    if (has(newState, album.id)) {
        unset(newState, album.id);
    } else {
        set(newState, album.id, album);
    }

    return { ...state, [data]: newState };
}

export function appReducer(state, action) {
    return _appReducer(state, action);
}
