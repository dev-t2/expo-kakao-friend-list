import { memo } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './screen/Home';
import Login from './screen/Login';
import NotFound from './screen/NotFound';

const App = () => {
  const isLoggedIn = false;

  return (
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
  );
};

export default memo(App);
