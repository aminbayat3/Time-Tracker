import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from "react-router-dom";

import { selectThemeMode } from './store/theme/theme.selector';

import Navigation from './components/navigation/navigation.component';
import HomePage from './routes/home-page/home-page.component';
import StatsPage from './routes/stats-page/stats-page.component';
import SettingPage from './routes/setting-page/setting-page.component';
import AuthenticationPage from './routes/authentication/authentication-page.component';

import { createTheme, ThemeProvider } from "@mui/material";
import { getDesignTokens } from './utils/theme.utils';

const App = () => {
  const mode = useSelector(selectThemeMode);

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path='/' element={ <Navigation /> }>
          <Route index element={ <HomePage /> } />
          <Route path='stats' element={ <StatsPage /> } />
          <Route path='settings' element={ <SettingPage /> } />
          <Route path='auth' element={ <AuthenticationPage /> } />
        </Route>
      </Routes>
    </ThemeProvider>
  );
};

export default App;
