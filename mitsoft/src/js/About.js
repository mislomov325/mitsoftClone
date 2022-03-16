import React, { Component } from "react";
import { YMaps, Map } from "react-yandex-maps";

import "../css/about.css";
export default class About extends Component {
  render() {
    return (
      <div className="aboutJs">
        <div className="maps">
          <YMaps>
            <div>
              <Map
                defaultState={{ center: [39.398799, 64.772431], zoom: 20 }}
              />
            </div>
          </YMaps>
        </div>
        <div className="address">
          <h2 className="infohead">
            Учебный центр расположен внутри моноцентра ишга мархамат
          </h2>

          <div className="infobody">
            <i class="fa-solid fa-location-dot"></i>
            <span className="infokey" style={{ color: "blue" }}>
              Адрес:
            </span>
            <span className="infovalue">
              Узбекистан, г. Бухара, ул. Пиридастгир, д. 13, 200100
            </span>
            <br />
            <span className="infokey" style={{ color: "blue" }}>
              Тел. номер:
            </span>
            <span className="infovalue">+998 91 414-48-04</span>
            <br />
            <span className="infokey" style={{ color: "blue" }}>
              Email:
            </span>
            <span className="infovalue">support@mitsoft.uz</span>
          </div>
        </div>
      </div>
    );
  }
}
