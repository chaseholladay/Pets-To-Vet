import React from "react";
import Auth from "../../modules/Auth";

const Nav = () => (
  <nav>
    <div className="nav-wrapper blue lighten-2">
      <a href="/" className="brand-logo">Pets to Vet</a>
      <ul className="right">
        {/* <li> */}
        {Auth.isUserAuthenticated() ? (
          <div className="top-bar-right">
            <li><a href="/logout">Log out</a></li>
          </div>
        ) : (
            <div className="top-bar-right">
              <li><a href="/login">Log in</a></li>
              <li><a href="/signup">Sign up</a></li>
            </div>
          )}
        {/* </li> */}
      </ul>
    </div>
  </nav>
);

export default Nav;
