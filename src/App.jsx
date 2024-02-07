import React from "react"
import Home from "./comp/home/Home"
import "./index.scss"
import Header from "./comp/header/Header"
import {BrowserRouter as Router,Routes,Route } from 'react-router-dom'
function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/netflix-clone" element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App
