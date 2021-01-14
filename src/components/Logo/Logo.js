import React from "react";
import logo from "../AppHeader/assets/logo.png";

const Logo = ({ width, height}) => (
  <img
    className="logo"
    src={logo}
    alt="logo cafe"
    width={width}
    height={height}
  />
);

export default Logo;
