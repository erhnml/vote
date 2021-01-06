import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { ToastProvider } from 'react-toast-notifications'

import PostContextProvider from '../context/PostContext';

import Detail from '../pages/detail';
import List from '../pages/list';
import Theme from '../theme';

function App() {
  return (
    <Theme>
      <ToastProvider>
        <PostContextProvider>
          <Router>
            <Switch>
              <Route path="/detail/:id" component={Detail} />
              <Route path="/" component={List} />
            </Switch>
          </Router>
        </PostContextProvider>
      </ToastProvider>
    </Theme>
    
  );
}

export default App;
