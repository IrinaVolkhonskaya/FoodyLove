import React from "react";
import logo from "../AppHeader/assets/logo.png";

interface ILogo {
  width: number,
  height: number,
}

const Logo: React.FC<ILogo> = ({ width, height}) => (
  <img
    className="logo"
    src={logo}
    alt="logo cafe"
    width={width}
    height={height}
  />
);

export default Logo;
