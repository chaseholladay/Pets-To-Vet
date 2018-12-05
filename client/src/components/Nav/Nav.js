import React from "react";
import Auth from "../../modules/Auth";

const Nav = () => (
  <nav>
    <div className="nav-wrapper">
      <a href="/" className="brand-logo">Pets to Vet</a>
      <ul className="right">
        <li>
          {Auth.isUserAuthenticated() ? (
            <div className="top-bar-right">
              <a href="/logout">Log out</a>
            </div>
          ) : (
              <div className="top-bar-right">
                <a href="/login">Log in</a>
                <a href="/signup">Sign up</a>
              </div>
            )}
        </li>
      </ul>
    </div>
  </nav>
);

export default Nav;
