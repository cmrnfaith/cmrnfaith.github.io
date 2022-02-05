import { Navbar } from "react-bootstrap"
import { FaRegChartBar } from "react-icons/fa"
import React from "react"
import { NavLink } from "react-router-dom"

const Navigation = () => {
  return (
    <div>
      <Navbar expand="lg" bg="dark" sticky="top">
        <NavLink to="/" id="nav-title-font text-light">
          <FaRegChartBar style={{ fontSize: "3em", marginLeft: "20px" }} />
        </NavLink>
        <NavLink className="nav-link" to="/about">
          <div className="text-light">
            <h4 className="nav-title-font">Cameron Faith</h4>
          </div>
        </NavLink>
        <ul className="navbar-nav ml-auto navitem-indent">
          <li>
            <NavLink to="/portfolio">
              <div className="nav-font text-light">Portfolio</div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/resume">
              <div className="nav-font text-light">Resume</div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact">
              <div className="nav-font text-light">Contact</div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/blog">
              <div className="nav-font text-light">Blog</div>
            </NavLink>
          </li>
        </ul>
      </Navbar>
    </div>
  )
}

export default Navigation
