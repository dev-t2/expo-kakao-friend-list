import { memo } from 'react';
import { useReactiveVar } from '@apollo/client';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { isDarkModeVar, isLoggedInVar } from './apollo';
import { Home, Login, NotFound } from './screen';

const lightTheme = {
  fontColor: '#2c2c2c',
  bgColor: 'lightgray',
};

const darkTheme = {
  fontColor: 'lightgray',
  bgColor: '#2c2c2c',
};

const App = () => {
  const isDarkMode = useReactiveVar(isDarkModeVar);
  const isLoggedIn = useReactiveVar(isLoggedInVar);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
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
