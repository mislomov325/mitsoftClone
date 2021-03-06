import React, { Component } from "react";
import { Button } from "react-bootstrap";
import Slider from "react-slick";
import "../css/online.css";
export default class Online extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "0px",
      slidesToShow: 1,
      speed: 500,
    };
    return (
      <div className="headerOne">
        {/* <h2>Center Mode</h2> */}
        <Slider {...settings}>
          <div>
            <div className="card">
              <div className="card_header">
                <iframe
                  // width="560"
                  // height="315"
                  className="you_tube"
                  src="https://www.youtube.com/embed/WucfckO0q48"
                  title="YouTube video player"
                  frameborder="0"
                  allow=" autoplay; encrypted-media; gyroscope"
                  allowfullscreen
                ></iframe>
              </div>
              <div className="card_body">
                <h3>Lorem Ipsum</h3>
                <hr />
                <p>
                  To create this program (Profile Card UI Design with Hover
                  Animation). First, you need to create two Files one HTML File
                  and another one is CSS File. After creating these files just
                  paste these following codes in your file.
                </p>
                <Button className="btnClick" variant="outline-primary">
                  Primary
                </Button>
              </div>
            </div>
          </div>
          <div>
            <div className="card">
              <div className="card_header">
                <iframe
                  // width="560"
                  // height="315"
                  className="you_tube"
                  src="https://www.youtube.com/embed/WucfckO0q48"
                  title="YouTube video player"
                  frameborder="0"
                  allow=" autoplay; encrypted-media; gyroscope"
                  allowfullscreen
                ></iframe>
              </div>
              <div className="card_body">
                <h3>Lorem Ipsum</h3>
                <hr />
                <p>
                  To create this program (Profile Card UI Design with Hover
                  Animation). First, you need to create two Files one HTML File
                  and another one is CSS File. After creating these files just
                  paste these following codes in your file.
                </p>
                <Button className="btnClick" variant="outline-primary">
                  Primary
                </Button>
              </div>
            </div>
          </div>
          <div>
            <div className="card">
              <div className="card_header">
                <iframe
                  // width="560"
                  // height="315"
                  className="you_tube"
                  src="https://www.youtube.com/embed/WucfckO0q48"
                  title="YouTube video player"
                  frameborder="0"
                  allow=" autoplay; encrypted-media; gyroscope"
                  allowfullscreen
                ></iframe>
              </div>
              <div className="card_body">
                <h3>Lorem Ipsum</h3>
                <hr />
                <p>
                  To create this program (Profile Card UI Design with Hover
                  Animation). First, you need to create two Files one HTML File
                  and another one is CSS File. After creating these files just
                  paste these following codes in your file.
                </p>
                <Button className="btnClick" variant="outline-primary">
                  Primary
                </Button>
              </div>
            </div>
          </div>
          <div>
            <div className="card">
              <div className="card_header">
                <iframe
                  // width="560"
                  // height="315"
                  className="you_tube"
                  src="https://www.youtube.com/embed/WucfckO0q48"
                  title="YouTube video player"
                  frameborder="0"
                  allow=" autoplay; encrypted-media; gyroscope"
                  allowfullscreen
                ></iframe>
              </div>
              <div className="card_body">
                <h3>Lorem Ipsum</h3>
                <hr />
                <p>
                  To create this program (Profile Card UI Design with Hover
                  Animation). First, you need to create two Files one HTML File
                  and another one is CSS File. After creating these files just
                  paste these following codes in your file.
                </p>
                <Button className="btnClick" variant="outline-primary">
                  Primary
                </Button>
              </div>
            </div>
          </div>
          <div>
            <div className="card">
              <div className="card_header">
                <iframe
                  // width="560"
                  // height="315"
                  className="you_tube"
                  src="https://www.youtube.com/embed/WucfckO0q48"
                  title="YouTube video player"
                  frameborder="0"
                  allow=" autoplay; encrypted-media; gyroscope"
                  allowfullscreen
                ></iframe>
              </div>
              <div className="card_body">
                <h3>Lorem Ipsum</h3>
                <hr />
                <p>
                  To create this program (Profile Card UI Design with Hover
                  Animation). First, you need to create two Files one HTML File
                  and another one is CSS File. After creating these files just
                  paste these following codes in your file.
                </p>
                <Button className="btnClick" variant="outline-primary">
                  Primary
                </Button>
              </div>
            </div>
          </div>
          <div>
            <div className="card">
              <div className="card_header">
                <iframe
                  // width="560"
                  // height="315"
                  className="you_tube"
                  src="https://www.youtube.com/embed/WucfckO0q48"
                  title="YouTube video player"
                  frameborder="0"
                  allow=" autoplay; encrypted-media; gyroscope"
                  allowfullscreen
                ></iframe>
              </div>
              <div className="card_body">
                <h3>Lorem Ipsum</h3>
                <hr />
                <p>
                  To create this program (Profile Card UI Design with Hover
                  Animation). First, you need to create two Files one HTML File
                  and another one is CSS File. After creating these files just
                  paste these following codes in your file.
                </p>
                <Button className="btnClick" variant="outline-primary">
                  Primary
                </Button>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
