import { createAction, withMatcher } from "../../utils/reducer/reducer.utils";
import { THEME_NAMES } from "../../types/theme.type";
import { ToggleTheme, THEME_ACTION_TYPES } from "../../types/action/theme-action.type";

export const toggleTheme = withMatcher((themeName: THEME_NAMES): ToggleTheme => {
    return createAction(THEME_ACTION_TYPES.TOGGLE_THEME, themeName);
});