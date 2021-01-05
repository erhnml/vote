import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Detail from '../pages/detail';
import List from '../pages/list';
import Theme from '../theme';

function App() {
  return (
    <Theme>
      <Router>
        <Switch>
          <Route path="/detail/:id" component={Detail} />
          <Route path="/" component={List} />
        </Switch>
      </Router>
    </Theme>
    
  );
}

export default App;
