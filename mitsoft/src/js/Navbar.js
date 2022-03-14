import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../css/navbar.css";
import logo from "../img/Logo.svg";
export default class Navbar extends Component {
  clickNav() {}
  render() {
    return (
      <div className="head">
        <img src={logo} alt="" className="image" />
        <ul>
          <li id="clickNav" onClick={this.clickNav}>
            <Link to="/">Home</Link>
          </li>
          <li id="clickNav" onClick={this.clickNav}>
            <a href="#about">About</a>
          </li>
          <li id="clickNav" onClick={this.clickNav}>
            <a href="#kurslar">Kurslar</a>
          </li>
          <li id="clickNav" onClick={this.clickNav}>
            <a href="#contact">Kurslar</a>
          </li>
          <li>
            <Link to="/enter" className="enter">
              Kirish
            </Link>
          </li>
          <li>
            <Link to="/singup" className="singup">
              Sing Up
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}
