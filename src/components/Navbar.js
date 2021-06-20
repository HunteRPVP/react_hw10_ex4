import React, { useContext } from "react";
// import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  return (
    <nav>
      <NavLink className="logo" to="/">
        Brand-Logo
      </NavLink>
      <div className="nav-links">
        <NavLink activeClassName="selectedPage" className="link" to="/about">
          About
        </NavLink>
        <NavLink activeClassName="selectedPage" className="link" to="/contact">
          Contact
        </NavLink>
        <NavLink activeClassName="selectedPage" className="link" to="/blog">
          Blog
        </NavLink>
        <NavLink activeClassName="selectedPage" className="link" to="/admin">
          Admin
        </NavLink>
        <NavLink
          activeClassName="selectedPage"
          className="link"
          to="/historyAPI"
        >
          HistoryAPI
        </NavLink>
        <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
          {isLoggedIn ? "logout" : "login"}
        </button>
      </div>
    </nav>
    // <ul>
    //     <li>
    //         <Link to="/">Home</Link>
    //     </li>
    //     <li>
    //         <Link to="/about">About</Link>
    //     </li>
    //     <li>
    //         <Link to="/contact">Contact</Link>
    //     </li>
    //     <li>
    //         <Link to="/blog">Blog</Link>
    //     </li>
    // </ul>
  );
};

export default Navbar;
