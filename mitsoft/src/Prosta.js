import React, { Component } from "react";
import Slider from "react-slick";

export default class Rtl extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      rtl: true,
    };
    return (
      <div>
        <h2>Right to Left</h2>
        <Slider {...settings}>
          <div>
            <div class="news-card">
              <a href="#" class="news-card__card-link"></a>
              <img
                src="https://images.pexels.com/photos/127513/pexels-photo-127513.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                alt=""
                class="news-card__image"
              />
              <div class="news-card__text-wrapper">
                <h2 class="news-card__title">Amazing First Title</h2>
                <div class="news-card__post-date">Jan 29, 2018</div>
                <div class="news-card__details-wrapper">
                  <p class="news-card__excerpt">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                    pariatur nemo tempore repellat? Ullam sed officia iure
                    architecto deserunt distinctio, pariatur&hellip;
                  </p>
                  <a href="#" class="news-card__read-more">
                    Read more <i class="fas fa-long-arrow-alt-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="news-card">
              <a href="#" class="news-card__card-link"></a>
              <img
                src="https://images.pexels.com/photos/127513/pexels-photo-127513.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                alt=""
                class="news-card__image"
              />
              <div class="news-card__text-wrapper">
                <h2 class="news-card__title">Amazing First Title</h2>
                <div class="news-card__post-date">Jan 29, 2018</div>
                <div class="news-card__details-wrapper">
                  <p class="news-card__excerpt">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                    pariatur nemo tempore repellat? Ullam sed officia iure
                    architecto deserunt distinctio, pariatur&hellip;
                  </p>
                  <a href="#" class="news-card__read-more">
                    Read more <i class="fas fa-long-arrow-alt-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="news-card">
              <a href="#" class="news-card__card-link"></a>
              <img
                src="https://images.pexels.com/photos/127513/pexels-photo-127513.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                alt=""
                class="news-card__image"
              />
              <div class="news-card__text-wrapper">
                <h2 class="news-card__title">Amazing First Title</h2>
                <div class="news-card__post-date">Jan 29, 2018</div>
                <div class="news-card__details-wrapper">
                  <p class="news-card__excerpt">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                    pariatur nemo tempore repellat? Ullam sed officia iure
                    architecto deserunt distinctio, pariatur&hellip;
                  </p>
                  <a href="#" class="news-card__read-more">
                    Read more <i class="fas fa-long-arrow-alt-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="news-card">
              <a href="#" class="news-card__card-link"></a>
              <img
                src="https://images.pexels.com/photos/127513/pexels-photo-127513.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                alt=""
                class="news-card__image"
              />
              <div class="news-card__text-wrapper">
                <h2 class="news-card__title">Amazing First Title</h2>
                <div class="news-card__post-date">Jan 29, 2018</div>
                <div class="news-card__details-wrapper">
                  <p class="news-card__excerpt">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                    pariatur nemo tempore repellat? Ullam sed officia iure
                    architecto deserunt distinctio, pariatur&hellip;
                  </p>
                  <a href="#" class="news-card__read-more">
                    Read more <i class="fas fa-long-arrow-alt-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="news-card">
              <a href="#" class="news-card__card-link"></a>
              <img
                src="https://images.pexels.com/photos/127513/pexels-photo-127513.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                alt=""
                class="news-card__image"
              />
              <div class="news-card__text-wrapper">
                <h2 class="news-card__title">Amazing First Title</h2>
                <div class="news-card__post-date">Jan 29, 2018</div>
                <div class="news-card__details-wrapper">
                  <p class="news-card__excerpt">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                    pariatur nemo tempore repellat? Ullam sed officia iure
                    architecto deserunt distinctio, pariatur&hellip;
                  </p>
                  <a href="#" class="news-card__read-more">
                    Read more <i class="fas fa-long-arrow-alt-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="news-card">
              <a href="#" class="news-card__card-link"></a>
              <img
                src="https://images.pexels.com/photos/127513/pexels-photo-127513.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                alt=""
                class="news-card__image"
              />
              <div class="news-card__text-wrapper">
                <h2 class="news-card__title">Amazing First Title</h2>
                <div class="news-card__post-date">Jan 29, 2018</div>
                <div class="news-card__details-wrapper">
                  <p class="news-card__excerpt">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                    pariatur nemo tempore repellat? Ullam sed officia iure
                    architecto deserunt distinctio, pariatur&hellip;
                  </p>
                  <a href="#" class="news-card__read-more">
                    Read more <i class="fas fa-long-arrow-alt-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
