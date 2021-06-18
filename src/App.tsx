import { useState } from 'react';
import { memo } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './screen/Home';
import Login from './screen/Login';
import NotFound from './screen/NotFound';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          {isLoggedIn ? (
            <Home setIsLoggedIn={setIsLoggedIn} />
          ) : (
            <Login setIsLoggedIn={setIsLoggedIn} />
          )}
        </Route>

        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
};

export default memo(App);
