import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { ToastProvider } from 'react-toast-notifications'

import Detail from '../pages/detail';
import List from '../pages/list';
import Theme from '../theme';

function App() {
  return (
    <Theme>
      <ToastProvider>
        <Router>
          <Switch>
            <Route path="/detail/:id" component={Detail} />
            <Route path="/" component={List} />
          </Switch>
        </Router>
      </ToastProvider>
    </Theme>
    
  );
}

export default App;
