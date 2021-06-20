import { memo } from 'react';
import { useReactiveVar } from '@apollo/client';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from 'styled-components';
import { Reset as StyledReset } from 'styled-reset';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { isDarkModeVar, isLoggedInVar } from './apollo';
import { darkTheme, GlobalStyle, lightTheme } from './style';
import { HOME, SIGNUP } from './route';
import { Home, Login, NotFound, Signup } from './screen';

const App = () => {
  const isDarkMode = useReactiveVar(isDarkModeVar);
  const isLoggedIn = useReactiveVar(isLoggedInVar);

  return (
    <HelmetProvider>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <StyledReset />
        <GlobalStyle />

        <Router>
          <Switch>
            <Route path={HOME} exact>
              {isLoggedIn ? <Home /> : <Login />}
            </Route>

            {!isLoggedIn && (
              <Route path={SIGNUP} exact>
                <Signup />
              </Route>
            )}

            <Route>
              <NotFound />
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </HelmetProvider>
  );
};

export default memo(App);
