import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../logo.svg";
import "./navbar.css";
import { useAuth0 } from "@auth0/auth0-react";
import { NavLink } from "react-router-dom";

// Assuming Verisoul SDK is loaded globally as per your index.html inclusion
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const { loginWithRedirect, logout, user, isAuthenticated, isLoading } = useAuth0();

  const handleLogin = () => {
    loginWithRedirect();
  };

  const handleLogout = () => {
    logout({ returnTo: window.location.origin });
    // Reset Verisoul session upon logout
    if (window.Verisoul) {
      window.Verisoul.reinitialize();
    }
  };

  // Authenticate Verisoul session after login
  if (isAuthenticated && window.Verisoul) {
    window.Verisoul.account({ accountId: user.sub }); // user.sub is typically used as a unique identifier
  }


  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} />
        </div>
        <div className="gpt3__navbar-links_container">
          <p>
            <a href="#home">Home</a>
          </p>
          <p>
            <a href="#wgpt3">What is Aire?</a>
          </p>
          <p>
            <a href="#possibility">Possibilities</a>
          </p>
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        {isAuthenticated && <p>
          {user.name}
        </p> }
        {isAuthenticated ? (
          <div className="flex">
            <p
              className="mr-2 cursor-pointer py-3"
              onClick={() =>
                logout({ logoutParams: { returnTo: window.location.origin } })
              }
            >
              Log Out
            </p>
            <button>
              <NavLink to="/Aire">Demo</NavLink>
            </button>
          </div>
        ) : (
          <button onClick={() => loginWithRedirect()}>Log In</button>
        )}
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="gpt3__navbar-menu_container scale-up-center">
            <div className="gpt3__navbar-menu_container-links">
              <p>
                <a href="#home">Home</a>
              </p>
              <p>
                <a href="#wgpt3">What is Aire?</a>
              </p>
              <p>
                <a href="#possibility">Possibilites</a>
              </p>
              <p>
                <a href="#features">Introduction</a>
              </p>
            
            </div>
            <div className="gpt3__navbar-menu_container-links-sign">
            {isAuthenticated ? (
          <div className="flex">
            <p
              className="mr-2 cursor-pointer py-3"
              onClick={() =>
                logout({ logoutParams: { returnTo: window.location.origin } })
              }
            >
              Log Out
            </p>
            <button>
              <NavLink to="/Aire">Let's Start</NavLink>
            </button>
          </div>
        ) : (
          <button onClick={() => loginWithRedirect()}>Log In</button>
        )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
