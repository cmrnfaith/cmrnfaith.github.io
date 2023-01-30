import { Navbar } from "react-bootstrap";
import { FaRegChartBar } from "react-icons/fa";
import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <Navbar expand="lg" bg="dark" sticky="top">
        <NavLink to="/" id="nav-title-font ">
          <FaRegChartBar style={{ fontSize: "3em", marginLeft: "20px" }} />
        </NavLink>
        <ul className="navbar-nav ml-auto navitem-indent">
          <li>
            <NavLink to="/portfolio">
              <div className="nav-font ">Portfolio</div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/resume">
              <div className="nav-font ">Resume</div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact">
              <div className="nav-font ">Contact</div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/blog">
              <div className="nav-font ">Blog</div>
            </NavLink>
          </li>
        </ul>
      </Navbar>
    </div>
  );
};

export default Navigation;
