import { memo } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact>
            <h1>Home</h1>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default memo(App);
