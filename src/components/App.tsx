import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Detail from '../pages/detail';
import List from '../pages/list';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/detail/:id" component={Detail} />
            <Route path="/" component={List} />
      </Switch>
    </Router>
  );
}

export default App;
