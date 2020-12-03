import cloneDeep from 'lodash/cloneDeep';
import unset from 'lodash/unset';
import set from 'lodash/set';
import has from 'lodash/has';
import {createReducer, on} from '@ngrx/store';

import {accessTokenGrantedAction, bookmarkUpdateAction, searchSuccessAction} from './app.actions';
import {Album, Albums, Library} from '../album.interface';

export interface AppState {
    accessToken: string;
    albums: Albums;
    library: Library;
}

export const initialState: AppState = {
    accessToken: null,
    albums: [],
    library: {},
};

// tslint:disable-next-line:variable-name
const _appReducer = createReducer(
    initialState,
    on(accessTokenGrantedAction, (state, { accessToken }) => ({ ...state, accessToken })),
    on(searchSuccessAction, (state, { albums }) => ({ ...state, albums })),
    on(bookmarkUpdateAction, (state, { payload }) => {
        const newState = cloneDeep(state.library);
        if (has(newState, payload.id)) {
            unset(newState, payload.id);
        } else {
            set(newState, payload.id, payload);
        }

        return { ...state, library: newState };
    })
);

export function appReducer(state, action) {
    return _appReducer(state, action);
}
