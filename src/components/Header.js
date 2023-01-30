import React from "react";
import Navigation from "./Navigation";
import { Route, HashRouter, Routes } from "react-router-dom";
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Resume from "./Resume";
import NotFound from "./NotFound";
import Blog from "./Blog";

const Header = () => {
  return (
    <>
      <HashRouter>
        <header>
          <Navigation />
        </header>
        <div className="container">
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/blog?os_viewer" element={<Blog blog="os_viewer" />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="*" exact={true} element={<NotFound />} />
          </Routes>
        </div>
      </HashRouter>
    </>
  );
};

export default Header;
