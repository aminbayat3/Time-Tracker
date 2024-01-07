import { amber, grey, deepOrange, cyan, blueGrey } from "@mui/material/colors";
import { THEME_NAMES } from "../types/theme.type";

export const getDesignTokens = (mode: THEME_NAMES) => {

  switch(mode) {
    case THEME_NAMES.LIGHT:
      return {
        palette: {
          mode,
          // palette values for light mode
          primary: amber,
          divider: amber[200],
          text: {
            primary: grey[900],
            secondary: grey[800],
          },
          secondary: cyan
        }
      }
    case THEME_NAMES.DARK:
      return {
        palette: {
          mode,
          // palette values for dark mode
          primary: cyan,
          divider: deepOrange[700],
          background: {
            default: cyan[900],
            paper: blueGrey[900],
          },
          text: {
            primary: '#fff',
            secondary: grey[500],
          },
          secondary: blueGrey
        }
      }

    default:
      throw new Error(`unhandled type of ${mode} in theme.utils file`);
  }
};