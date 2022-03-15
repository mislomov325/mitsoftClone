import React, { Component } from "react";
import { BrowserRouter, Link } from "react-router-dom";
// import logo from "../img/Logo.svg";
import "../css/footer.css";
export default class Footer extends Component {
  render() {
    return (
      <div className="footerfoo">
        <BrowserRouter>
          <footer className="footer-16371">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-9 text-center">
                  <div className="footer-site-logo mb-4">
                    <Link to="/">
                      <img
                        src="https://mitsoft.uz/svg/Logo_Gray.svg"
                        alt=""
                        className="logoimg"
                      />
                    </Link>
                  </div>
                  <ul className="list-unstyled nav-links mb-5">
                    <li>
                      <Link to="/">About</Link>
                    </li>
                    <li>
                      <Link to="/">Services</Link>
                    </li>
                    <li>
                      <Link to="/">Press</Link>
                    </li>
                    <li>
                      <Link to="/">Careers</Link>
                    </li>
                    <li>
                      <Link to="/">FAQ</Link>
                    </li>
                    <li>
                      <Link to="/">Legal</Link>
                    </li>
                    <li>
                      <Link to="/">Contact</Link>
                    </li>
                  </ul>

                  <div className="social mb-4">
                    <h3>
                      <Link className="mitsoftUz" to="/">
                        mitsoft.uz
                      </Link>
                      {/* mitsoft.uz */}
                    </h3>
                    <ul className="list-unstyled">
                      <li className="in">
                        <Link to="/">
                          <span className="icon-instagram"></span>
                        </Link>
                      </li>
                      <li className="fb">
                        <Link to="/">
                          <span className="icon-facebook"></span>
                        </Link>
                      </li>
                      <li className="tw">
                        <Link to="/">
                          <span className="icon-twitter"></span>
                        </Link>
                      </li>
                      <li className="pin">
                        <Link to="/">
                          <span className="icon-pinterest"></span>
                        </Link>
                      </li>
                      <li className="dr">
                        <Link to="/">
                          <span className="icon-dribbble"></span>
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div className="copyright">
                    <p className="mb-0">
                      <small>&copy;2022. MITSoft. Все права защищены.</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </BrowserRouter>
      </div>
    );
  }
}
