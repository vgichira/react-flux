import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const activeStyle = {
    color: "orange",
  };

  return (
    <div className="container-fluid">
      <nav>
        <NavLink activeStyle={activeStyle} exact to="/">
          Home
        </NavLink>{" "}
        {" | "}
        <NavLink activeStyle={activeStyle} to="/about">
          About
        </NavLink>
        {" | "}
        <NavLink activeStyle={activeStyle} to="/courses">
          Courses
        </NavLink>
      </nav>
    </div>
  );
}

export default Header;
