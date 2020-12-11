import React from "react";
import Header from "./Header";
import "./firebase/config";
import "./App.css";
import "./pages/Signup";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Signup from "./pages/Signup";
import { UserProvider } from "./firebase/UserProvider";
import Profile from './pages/Profile';
import './pages/Profile';

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Header></Header>
        <div className="app">
          <div className="ui grid container"></div>
          <Switch>
            <Route exact path="/signup" component={Signup} />
            <Route exact path= "/profile" component ={Profile} />
          </Switch>
        </div>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
