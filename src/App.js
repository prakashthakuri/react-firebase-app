import React from "react";
import Header from "./Header";
import "./firebase/config";
import "./App.css";
import "./pages/Signup";
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";
import Signup from "./pages/Signup";
import { UserProvider } from "./firebase/UserProvider";
import Profile from "./pages/Profile";
import "./pages/Profile";
import Login from "./pages/Login";
import ProfileRedirect from "./router/ProfileRedirect";
import PrivateRoute from "./router/PrivateRoute";

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Header></Header>
        <div className="app">
          <div className="ui grid container">
            <Switch>
              <ProfileRedirect exact path="/signup" component= {Signup}/>
              <PrivateRoute exact path="/profile/:id" component= {Profile}/>
              <ProfileRedirect exact path="/login" component={Login} />

              <Route exact path="/">
                <Redirect to="/login"/>
              </Route>
              {/* <Route exact path="/signup" component={Signup} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/profile/:id" component={Profile} /> */}
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
