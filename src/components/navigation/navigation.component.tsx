import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import { useTheme } from "@mui/material/styles";

import { selectThemeMode } from "../../store/theme/theme.selector";

import { toggleTheme } from "../../store/theme/theme.action";

import NavbarItems from "./navbar-items.components";

import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

import pomoLogo from "../../assets/pomoLogo.png";

import { THEME_NAMES } from "../../types/theme.type";

import {
  DRAWER_WIDTH,
  Main,
  AppBar,
  DrawerHeader,
  LogoImage,
  ModeIconGrid,
} from "./navigation.styles";

const Navigation: React.FC = () => {
  const theme = useTheme();
  const dispatch = useDispatch();

  const mode = useSelector(selectThemeMode);
  const [open, setOpen] = useState(false);

  const handleToggleTheme = () => {
    dispatch(
      toggleTheme(
        mode === THEME_NAMES.LIGHT ? THEME_NAMES.DARK : THEME_NAMES.LIGHT
      )
    );
  };

  // this later can be handled with a custom hook
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="fixed" open={open}>
          <Toolbar>
            <Grid container spacing={1}>
              <Box sx={{ p: theme.spacing(1), margin: "auto 0" }}>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  onClick={handleDrawerOpen}
                  edge="start"
                  sx={{
                    mt: theme.spacing(1),
                    ...(open && { display: "none" }),
                  }}
                >
                  <MenuIcon />
                </IconButton>
              </Box>
              <Grid item xs={10}>
                <Box sx={{ display: "flex" }}>
                  <LogoImage src={pomoLogo} alt="logo" />
                  <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{ display: "flex", alignItems: "center" }}
                  >
                    Time Mastery
                  </Typography>
                </Box>
              </Grid>
              <ModeIconGrid item xs={1}>
                {mode === THEME_NAMES.LIGHT ? (
                  <Brightness4Icon
                    sx={{ cursor: "pointer" }}
                    onClick={handleToggleTheme}
                  />
                ) : (
                  <Brightness7Icon
                    sx={{ cursor: "pointer" }}
                    onClick={handleToggleTheme}
                  />
                )}
              </ModeIconGrid>
            </Grid>
          </Toolbar>
        </AppBar>
        <Drawer
          sx={{
            width: DRAWER_WIDTH,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: DRAWER_WIDTH,
              boxSizing: "border-box",
            },
          }}
          variant="persistent"
          anchor="left"
          open={open}
        >
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </DrawerHeader>
          <Divider />
          <NavbarItems />
        </Drawer>
        <Main open={open}>
          <DrawerHeader />
          <Outlet />
        </Main>
      </Box>
  );
};

export default Navigation;
