import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import Homepage from "./pages/Homepage";
import Nav from "./components/Nav";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Auth from "./modules/Auth";
import UserPage from "./pages/Userpage";
import Logout from "./components/Logout";
import "./App.css";

const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Auth.isUserAuthenticated() ? UserPage : Homepage} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/logout" component={Logout} />
      </Switch>
    </div>
  </Router>
);

export default App;
