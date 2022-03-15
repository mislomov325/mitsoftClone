import React, { Component } from "react";
import { Button } from "react-bootstrap";
import Slider from "react-slick";
import "../css/kurslar.css";
export default class Kurslar extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
    };
    return (
      <div className="headKurslar">
        <Slider {...settings}>
          <div>
            <div>
              <article class="card">
                <header class="card__thumb">
                  {/* <a href="#"> */}
                  <img src="https://mitsoft.uz/svg/Frontend.svg" alt="" />
                  {/* </a> */}
                </header>

                <div class="card__body">
                  <h2 class="card__title">
                    <a href="#">an ice cream sundae party！</a>
                  </h2>
                  <div class="card__subtitle">an ice cream sundae party！</div>
                  <p class="card__description">
                    5. Pour the mixture into a non-stick container and then
                    freeze overnight. Take treating your dog a step further by
                    turning it into an ice cream sundae party!
                  </p>
                </div>
                <Button className="btnPri" variant="outline-primary">
                  Primary
                </Button>
              </article>
            </div>
          </div>
          <div>
            <div>
              <article class="card">
                <header class="card__thumb">
                  <a href="#">
                    <img src="https://mitsoft.uz/svg/Frontend.svg" alt="" />
                  </a>
                </header>

                <div class="card__body">
                  <h2 class="card__title">
                    <a href="#">an ice cream sundae party！</a>
                  </h2>
                  <div class="card__subtitle">an ice cream sundae party！</div>
                  <p class="card__description">
                    5. Pour the mixture into a non-stick container and then
                    freeze overnight. Take treating your dog a step further by
                    turning it into an ice cream sundae party!
                  </p>
                </div>
                <Button className="btnPri" variant="outline-primary">
                  Primary
                </Button>
              </article>
            </div>
          </div>
          <div>
            <div>
              <article class="card">
                <header class="card__thumb">
                  <a href="#">
                    <img src="https://mitsoft.uz/svg/Frontend.svg" alt="" />
                  </a>
                </header>

                <div class="card__body">
                  <h2 class="card__title">
                    <a href="#">an ice cream sundae party！</a>
                  </h2>
                  <div class="card__subtitle">an ice cream sundae party！</div>
                  <p class="card__description">
                    5. Pour the mixture into a non-stick container and then
                    freeze overnight. Take treating your dog a step further by
                    turning it into an ice cream sundae party!
                  </p>
                </div>
                <Button className="btnPri" variant="outline-primary">
                  Primary
                </Button>
              </article>
            </div>
          </div>
          <div>
            <div>
              <article class="card">
                <header class="card__thumb">
                  <a href="#">
                    <img src="https://mitsoft.uz/svg/Frontend.svg" alt="" />
                  </a>
                </header>

                <div class="card__body">
                  <h2 class="card__title">
                    <a href="#">an ice cream sundae party！</a>
                  </h2>
                  <div class="card__subtitle">an ice cream sundae party！</div>
                  <p class="card__description">
                    5. Pour the mixture into a non-stick container and then
                    freeze overnight. Take treating your dog a step further by
                    turning it into an ice cream sundae party!
                  </p>
                </div>
                <Button className="btnPri" variant="outline-primary">
                  Primary
                </Button>
              </article>
            </div>
          </div>
          <div>
            <div>
              <article class="card">
                <header class="card__thumb">
                  <a href="#">
                    <img src="https://mitsoft.uz/svg/Frontend.svg" alt="" />
                  </a>
                </header>

                <div class="card__body">
                  <h2 class="card__title">
                    <a href="#">an ice cream sundae party！</a>
                  </h2>
                  <div class="card__subtitle">an ice cream sundae party！</div>
                  <p class="card__description">
                    5. Pour the mixture into a non-stick container and then
                    freeze overnight. Take treating your dog a step further by
                    turning it into an ice cream sundae party!
                  </p>
                </div>
                <Button className="btnPri" variant="outline-primary">
                  Primary
                </Button>
              </article>
            </div>
          </div>
          <div>
            <div>
              <article class="card">
                <header class="card__thumb">
                  <a href="#">
                    <img src="https://mitsoft.uz/svg/Frontend.svg" alt="" />
                  </a>
                </header>

                <div class="card__body">
                  <h2 class="card__title">
                    <a href="#">an ice cream sundae party！</a>
                  </h2>
                  <div class="card__subtitle">an ice cream sundae party！</div>
                  <p class="card__description">
                    5. Pour the mixture into a non-stick container and then
                    freeze overnight. Take treating your dog a step further by
                    turning it into an ice cream sundae party!
                  </p>
                </div>
                <Button className="btnPri" variant="outline-primary">
                  Primary
                </Button>
              </article>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
