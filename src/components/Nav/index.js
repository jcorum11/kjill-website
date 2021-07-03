import React from "react";

const Navigation = () => {
  return (
    <div id="nav-container">
      <div id="nav-container__title-img"></div>
      <ul id="nav-container__header-list">
        <li>
          <a href="/">Gallery</a>
        </li>
        <li>
          <a href="/inspiration">Inspiration</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/shop">Shop</a>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
