import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div id="nav-container">
      <div id="nav-container__title-img"></div>
      <ul id="nav-container__header-list">
        <li><a href="#">Gallery</a></li>
        <li><a href="#">Inspiration</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Shop</a></li>
      </ul>
    </div>
  );
};

export default Navigation;
