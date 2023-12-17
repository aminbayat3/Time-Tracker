import HomeIcon from '@mui/icons-material/Home';
import BarChartIcon from '@mui/icons-material/BarChart';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';


export enum NAV_ITEMS_TYPES {
    HOME = "Home",
    STATS = "Stats",
    SETTINGS = "Settings",
    LANGUAGE = "Language",
    REGISTER = "Register",
    SIGN_OUT = "SIGN_OUT",
}

export const navItemRegister = {
    title: NAV_ITEMS_TYPES.REGISTER,
    icon: LockOutlinedIcon,
    route: "/auth"
}

export const navItemSignOut = {
    title: NAV_ITEMS_TYPES.SIGN_OUT,
    icon: LockOutlinedIcon,
}

export const NAV_ITEMS = [
    {
        title: NAV_ITEMS_TYPES.HOME,
        icon: HomeIcon,
        route: "/"
    },
    {
        title: NAV_ITEMS_TYPES.STATS,
        icon: BarChartIcon,
        route: "/stats"
    },
    {
        title: NAV_ITEMS_TYPES.SETTINGS,
        icon: SettingsOutlinedIcon,
        route: "/settings"
    },
    {
        title: NAV_ITEMS_TYPES.LANGUAGE,
        icon: LanguageOutlinedIcon,
        route: "/language",
    }
]