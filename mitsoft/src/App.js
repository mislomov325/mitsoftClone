import React, { Component } from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./js/Home";
import SingUp from "./js/SingUp";
import Enter from "./js/Enter";
import Navbar from "./js/Navbar";
export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} exact path="/" />
          <Route element={<Enter />} exact path="/enter" />
          <Route element={<SingUp />} exact path="/singup" />

        </Routes>
      </BrowserRouter>
    );
  }
}