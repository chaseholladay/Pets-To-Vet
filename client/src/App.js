import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import Homepage from "./pages/Homepage";
import Nav from "./components/Nav";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Auth from "./modules/Auth";
import Dashboard from "./pages/Dashboard";
import Logout from "./components/Logout";

const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Auth.isUserAuthenticated() ? Dashboard : Homepage} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/logout" component={Logout} />
      </Switch>
    </div>
  </Router>
);

export default App;
