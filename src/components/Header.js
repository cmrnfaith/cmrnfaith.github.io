import { Route, Navigate, HashRouter, Routes } from "react-router-dom"
import React from "react"
import Navigation from "./Navigation"
import About from "./About"
import Portfolio from "./Portfolio"
import Contact from "./Contact"
import Resume from "./Resume"
import NotFound from "./NotFound"

const Header = () => {
  return (
    <>
      <HashRouter>
        <header>
          <Navigation />
        </header>
        <Routes>
          <Route exact path="/" element={<Navigate to="/about" />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" exact={true} element={<NotFound />} />
        </Routes>
      </HashRouter>
    </>
  )
}

export default Header
