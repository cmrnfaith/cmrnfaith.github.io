import "./index.css"
import Header from "./components/Header"
import Footer from "./components/Footer"
import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"

const App = () => {
  return (
    <div className="flex-wrapper">
      <Header />
      <Footer />
    </div>
  )
}

export default App
