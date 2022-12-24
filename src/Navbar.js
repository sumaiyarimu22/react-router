import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const NavActiveStyles = ({ isActive }) => {
    return {
      color: isActive ? "orangered" : null,
    };
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <span>React Router pro.</span>
      </div>
      <div className="links">
        <NavLink end to="/" style={NavActiveStyles}>
          Home
        </NavLink>
        <NavLink to="/theater" style={NavActiveStyles}>
          Theater
        </NavLink>
        <NavLink to="/about" style={NavActiveStyles}>
          About
        </NavLink>
        <NavLink to="/contact" style={NavActiveStyles}>
          Contact
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
