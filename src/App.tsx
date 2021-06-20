import { memo } from 'react';
import { useReactiveVar } from '@apollo/client';
import { ThemeProvider } from 'styled-components';
import { Reset as StyledReset } from 'styled-reset';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { isDarkModeVar, isLoggedInVar } from './apollo';
import { darkTheme, GlobalStyle, lightTheme } from './style';
import { Home, Login, NotFound, Signup } from './screen';

const App = () => {
  const isDarkMode = useReactiveVar(isDarkModeVar);
  const isLoggedIn = useReactiveVar(isLoggedInVar);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <StyledReset />
      <GlobalStyle />

      <Router>
        <Switch>
          <Route path="/" exact>
            {isLoggedIn ? <Home /> : <Login />}
          </Route>

          {!isLoggedIn && (
            <Route path="/signup" exact>
              <Signup />
            </Route>
          )}

          <Route>
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default memo(App);
