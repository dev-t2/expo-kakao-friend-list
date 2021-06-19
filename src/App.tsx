import { memo } from 'react';
import { useReactiveVar } from '@apollo/client';
import { ThemeProvider } from 'styled-components';
import { Reset } from 'styled-reset';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { isDarkModeVar, isLoggedInVar } from './apollo';
import { darkTheme, lightTheme } from './theme';
import { Home, Login, NotFound } from './screen';

const App = () => {
  const isDarkMode = useReactiveVar(isDarkModeVar);
  const isLoggedIn = useReactiveVar(isLoggedInVar);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <Reset />

      <Router>
        <Switch>
          <Route path="/" exact>
            {isLoggedIn ? <Home /> : <Login />}
          </Route>

          <Route>
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default memo(App);
