import React, { Component } from "react";
import Navbar from "./Navbar";
import video from "../img/videoOne.mp4";
import line from "../img/line.png";
import "../css/home.css";
import Kurslar from "./Kurslar";
import Online from "./Online";
import Infokurs from "./Infokurs";
import About from "./About";
import Footer from "./Footer";
export default class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <video className="video" autoPlay controls>
          <source src={video} type="video/mp4" />
        </video>
        <br />
        <div className="sheetOne">
          <img className="lineLeft" src={line} alt="" />
          <p>Список курсов</p>
          <img className="lineRight" src={line} alt="" />
        </div>
        <p className="textOne">
          ВЫБЕРИТЕ ПОДХОДЯЩИЙ ВАМ КУРС И НАЧНИТЕ СВОЮ КАРЬЕРУ В СФЕРЕ IT
        </p>
        <div id="kurslar">
          <Kurslar />
        </div>
        <br />
        <div id="onlineKurs">
        <div className="sheetOne">
          <img className="lineLeft" src={line} alt="" />
          <p>Список курсов</p>
          <img className="lineRight" src={line} alt="" />
        </div>
        <p className="textOne">
          ВЫБЕРИТЕ ПОДХОДЯЩИЙ ВАМ КУРС И НАЧНИТЕ СВОЮ КАРЬЕРУ В СФЕРЕ IT
        </p>
          <Online />
        </div>
        {/* <br /> */}
        <div id="news">
        <div className="sheetOne">
          <img className="lineLeft" src={line} alt="" />
          <p>Список курсов</p>
          <img className="lineRight" src={line} alt="" />
        </div>
        <p className="textOne">
          ВЫБЕРИТЕ ПОДХОДЯЩИЙ ВАМ КУРС И НАЧНИТЕ СВОЮ КАРЬЕРУ В СФЕРЕ IT
        </p>
          <Infokurs />
        </div>
        <br/>
        <div id="about">
        <div className="sheetOne">
          <img className="lineLeft" src={line} alt="" />
          <p>Список курсов</p>
          <img className="lineRight" src={line} alt="" />
        </div>
        <p className="textOne">
          ВЫБЕРИТЕ ПОДХОДЯЩИЙ ВАМ КУРС И НАЧНИТЕ СВОЮ КАРЬЕРУ В СФЕРЕ IT
        </p>
          <About />
        </div>
        <br/>
        <div id="footer">
          <Footer />
        </div>
      </div>
    );
  }
}
