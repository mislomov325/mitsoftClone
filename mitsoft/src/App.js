import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./js/About";
import Home from "./js/Home";
import SingUp from "./js/SingUp";
import Enter from "./js/Enter";
import Prosta from "./Prosta";
import Online from "./js/Online";
export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route element={<About />} exact path="/about" />
            <Route element={<Home />} exact path="/" />
            <Route element={<Enter />} exact path="/enter" />
            <Route element={<SingUp />} exact path="/singup" />
          </Routes>
        </BrowserRouter>
        {/* <Prosta/> */}
        {/* <Online/> */}
      </div>
    );
  }
}
