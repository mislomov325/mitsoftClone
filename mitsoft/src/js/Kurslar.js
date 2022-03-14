import React, { Component } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Button } from "react-bootstrap";
import "../css/kurslar.css";
import { Link } from "react-router-dom";

export default class Kurslar extends Component {
  render() {
    const responsive = {
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5,
        slidesToSlide: 3, // optional, default to 1.
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 3,
        slidesToSlide: 2, // optional, default to 1.
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1, // optional, default to 1.
      },
    };

    return (
      <div className="headKurs">
        <Carousel
          responsive={responsive}
          autoPlay={this.props.deviceType !== "mobile" ? true : false}
          autoPlaySpeed={2000}
          infinite={true}
        >
          {/* <ul className="cards" id="owl-demo"> */}
          <div className="item">
            <span className="card">
              <img
                src="https://mitsoft.uz/svg/Webdesign.svg"
                className="card__image"
                alt=""
              />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores, blanditiis?Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Asperiores, blanditiis?Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Asperiores, blanditiis?
              </p>
              <div className="card__overlay">
                <div className="card__header">
                  <img
                    className="card__thumb"
                    src="https://mitsoft.uz/svg/Webdesign.svg"
                    alt=""
                  />
                  <div className="card__header-text">
                    <h3 className="card__title">Jessica Parker</h3>
                    <span className="card__status">1 hour ago</span>
                  </div>
                </div>
                <p className="card__description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Asperiores, blanditiis?
                </p>
                <Button className="btn" variant="outline-primary">
                  <Link to="/"> Enter</Link>
                </Button>
              </div>
            </span>
          </div>
          <div className="item">
            <span className="card">
              <img
                src="https://mitsoft.uz/svg/Webdesign.svg"
                className="card__image"
                alt=""
              />
              <div className="card__overlay">
                <div className="card__header">
                  <img
                    className="card__thumb"
                    src="https://mitsoft.uz/svg/Webdesign.svg"
                    alt=""
                  />
                  <div className="card__header-text">
                    <h3 className="card__title">kim Cattrall</h3>
                    <span className="card__status">3 hours ago</span>
                  </div>
                </div>
                <p className="card__description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Asperiores, blanditiis?
                </p>
                <Button className="btn" variant="outline-primary">
                  {" "}
                  <Link to="/"> Enter</Link>
                </Button>
              </div>
            </span>
          </div>
          <div className="item">
            <span className="card">
              <img
                src="https://mitsoft.uz/svg/Webdesign.svg"
                className="card__image"
                alt=""
              />
              <div className="card__overlay">
                <div className="card__header">
                  <img
                    className="card__thumb"
                    src="https://mitsoft.uz/svg/Webdesign.svg"
                    alt=""
                  />
                  <div className="card__header-text">
                    <h3 className="card__title">Jessica Parker</h3>
                    <span className="card__tagline">
                      Lorem ipsum dolor sit amet consectetur
                    </span>
                    <span className="card__status">1 hour ago</span>
                  </div>
                </div>
                <p className="card__description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Asperiores, blanditiis?
                </p>
                <Button className="btn" variant="outline-primary">
                  <Link to="/"> Enter</Link>
                </Button>{" "}
              </div>
            </span>
          </div>
          <div className="item">
            <span className="card">
              <img
                src="https://mitsoft.uz/svg/Webdesign.svg"
                className="card__image"
                alt=""
              />
              <div className="card__overlay">
                <div className="card__header">
                  <img
                    className="card__thumb"
                    src="https://mitsoft.uz/svg/Webdesign.svg"
                    alt=""
                  />
                  <div className="card__header-text">
                    <h3 className="card__title">kim Cattrall</h3>
                    <span className="card__status">3 hours ago</span>
                  </div>
                </div>
                <p className="card__description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Asperiores, blanditiis?
                </p>
                <Button className="btn" variant="outline-primary">
                  {" "}
                  <Link to="/"> Enter</Link>
                </Button>
              </div>
            </span>
          </div>
          <div className="item">
            <span className="card">
              <img
                src="https://mitsoft.uz/svg/Webdesign.svg"
                className="card__image"
                alt=""
              />
              <div className="card__overlay">
                <div className="card__header">
                  <img
                    className="card__thumb"
                    src="https://mitsoft.uz/svg/Webdesign.svg"
                    alt=""
                  />
                  <div className="card__header-text">
                    <h3 className="card__title">kim Cattrall</h3>
                    <span className="card__status">3 hours ago</span>
                  </div>
                </div>
                <p className="card__description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Asperiores, blanditiis?
                </p>
                <Button className="btn" variant="outline-primary">
                  {" "}
                  <Link to="/"> Enter</Link>
                </Button>
              </div>
            </span>
          </div>
          <div className="item">
            <span className="card">
              <img
                src="https://mitsoft.uz/svg/Webdesign.svg"
                className="card__image"
                alt=""
              />
              <div className="card__overlay">
                <div className="card__header">
                  <img
                    className="card__thumb"
                    src="https://mitsoft.uz/svg/Webdesign.svg"
                    alt=""
                  />
                  <div className="card__header-text">
                    <h3 className="card__title">kim Cattrall</h3>
                    <span className="card__status">3 hours ago</span>
                  </div>
                </div>
                <p className="card__description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Asperiores, blanditiis?
                </p>
                <Button className="btn" variant="outline-primary">
                  {" "}
                  <Link to="/"> Enter</Link>
                </Button>
              </div>
            </span>
          </div>
          <div className="item">
            <span className="card">
              <img
                src="https://mitsoft.uz/svg/Webdesign.svg"
                className="card__image"
                alt=""
              />
              <div className="card__overlay">
                <div className="card__header">
                  <img
                    className="card__thumb"
                    src="https://mitsoft.uz/svg/Webdesign.svg"
                    alt=""
                  />
                  <div className="card__header-text">
                    <h3 className="card__title">kim Cattrall</h3>
                    <span className="card__status">3 hours ago</span>
                  </div>
                </div>
                <p className="card__description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Asperiores, blanditiis?
                </p>
                <Button className="btn" variant="outline-primary">
                  {" "}
                  <Link to="/"> Enter</Link>
                </Button>
              </div>
            </span>
          </div>
          <div className="item">
            <span className="card">
              <img
                src="https://mitsoft.uz/svg/Webdesign.svg"
                className="card__image"
                alt=""
              />
              <div className="card__overlay">
                <div className="card__header">
                  <img
                    className="card__thumb"
                    src="https://mitsoft.uz/svg/Webdesign.svg"
                    alt=""
                  />
                  <div className="card__header-text">
                    <h3 className="card__title">kim Cattrall</h3>
                    <span className="card__status">3 hours ago</span>
                  </div>
                </div>
                <p className="card__description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Asperiores, blanditiis?
                </p>
                <Button className="btn" variant="outline-primary">
                  {" "}
                  <Link to="/"> Enter</Link>
                </Button>
              </div>
            </span>
          </div>
          {/* </ul> */}
        </Carousel>
      </div>
    );
  }
}
