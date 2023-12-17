import { AnyAction } from 'redux';

import { toggleTheme } from './theme.action';

import { THEME_NAMES } from '../../types/theme.type';

export type ThemeState = {
    mode: THEME_NAMES,
};

const THEME_INITIAL_STATE: ThemeState = {
    mode: THEME_NAMES.LIGHT
};

export const themeReducer = (state = THEME_INITIAL_STATE, action: AnyAction): ThemeState => {
    if(toggleTheme.match(action)) {
        return { 
            ...state,
            mode: action.payload,
        }
    }

    return state;
}

