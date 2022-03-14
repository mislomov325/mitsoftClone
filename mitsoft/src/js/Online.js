import React, { Component } from "react";
import Slider from "react-slick";
import "../css/online.css"
// import "../css/sliderOne.css"
// import "../css/sliderTwo.css"
// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";
export default class Online extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      speed: 500,
    };
    return (
      <div className="headerOne">
        <h2>Center Mode</h2>
        <Slider {...settings}>
          <div>
            <img
                src="https://mitsoft.uz/svg/Webdesign.svg"
                className="card__image"
                alt=""
                style={{height:"400px"}}
              />
          </div>
          <div>
            <img
                src="https://mitsoft.uz/svg/Webdesign.svg"
                className="card__image"
                alt=""
                style={{height:"400px"}}
              />
          </div>
          <div>
            <img
                src="https://mitsoft.uz/svg/Webdesign.svg"
                className="card__image"
                alt=""
                style={{height:"400px"}}
              />
          </div>
          <div>
            <img
                src="https://mitsoft.uz/svg/Webdesign.svg"
                className="card__image"
                alt=""
                style={{height:"400px"}}
              />
          </div>
          <div>
            <img
                src="https://mitsoft.uz/svg/Webdesign.svg"
                className="card__image"
                alt=""
                style={{height:"400px"}}
              />
          </div>
          <div>
            <img
                src="https://mitsoft.uz/svg/Webdesign.svg"
                className="card__image"
                alt=""
                style={{height:"400px"}}
              />
          </div>
        </Slider>
      </div>
    );
  }
}
