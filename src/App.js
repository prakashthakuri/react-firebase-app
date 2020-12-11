import React from 'react';
import Header from './Header';
import './firebase/config';
import './App.css';

import './pages/Signup';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import Signup from './pages/Signup';

function App() {
  return (
    <BrowserRouter>
    <Header></Header>
      <div className="app">
        <div className="ui grid container"></div>
        <Switch>
          <Route exact path="/signup"component= {Signup} />
        </Switch>
      </div>
    </BrowserRouter>

  );
}

export default App;
