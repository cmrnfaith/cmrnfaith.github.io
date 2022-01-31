import { Route, Navigate, HashRouter } from "react-router-dom"
import React from "react"
import Navigation from "./Navigation"
import About from "./About"
import Portfolio from "./Portfolio"
import Contact from "./Contact"
import Resume from "./Resume"

const Header = () => {
  return (
    <HashRouter>
      <header>
        <Navigation />
      </header>

      <div className="content">
        <Route exact path="/" render={() => <Navigate to="/about" />} />
        <Route path="/about" component={About} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
        <Route path="/resume" component={Resume} />
      </div>
    </HashRouter>
  )
}

export default Header
