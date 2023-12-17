import { ActionWithPayload } from "../../utils/reducer/reducer.utils";
import { THEME_NAMES } from "../theme.type";

export enum THEME_ACTION_TYPES {
    TOGGLE_THEME = "TOGGLE_THEME"
};

export type ToggleTheme = ActionWithPayload<THEME_ACTION_TYPES.TOGGLE_THEME, THEME_NAMES>;