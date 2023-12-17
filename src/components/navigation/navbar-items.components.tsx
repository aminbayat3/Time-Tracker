import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import { NavbarLink } from "./navigation.styles";

import { NAV_ITEMS, navItemRegister } from "./navigation.utils";


const NavbarItems = () => {
    return (
        <List>
          {[...NAV_ITEMS, navItemRegister].map(({ title, icon: NavIcon, route }, idx) => (
            <NavbarLink to={route} key={idx}>
            <ListItem key={title} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <NavIcon />
                </ListItemIcon>
                <ListItemText primary={title} />
              </ListItemButton>
            </ListItem>
            </NavbarLink>
          ))}
        </List>
    )
}

export default NavbarItems;