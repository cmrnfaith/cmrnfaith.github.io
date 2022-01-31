import { Navbar } from "react-bootstrap"
import React from "react"
import { NavLink } from "react-router-dom"

const Navigation = () => {
  return (
    <div>
      <Navbar expand="lg" bg="dark" sticky="top">
        <NavLink className="nav-link" to="/">
          <div class="text-light">
            <h4 class="nav-title-font">Cameron Faith</h4>
          </div>
        </NavLink>
        <ul class="navbar-nav ml-auto navitem-indent">
          <NavLink to="/about">
            <div class="nav-font text-light">About Me</div>
          </NavLink>

          <NavLink to="/portfolio">
            <div class="nav-font text-light">Portfolio</div>
          </NavLink>

          <NavLink to="/contact">
            <div class="nav-font text-light">Contact</div>
          </NavLink>

          <NavLink to="/resume">
            <div class="nav-font text-light">Resume</div>
          </NavLink>
        </ul>
      </Navbar>
    </div>
  )
}

export default Navigation
