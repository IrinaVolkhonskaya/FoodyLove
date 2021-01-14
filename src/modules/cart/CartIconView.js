import React from "react";
import { Link } from "react-router-dom";
import s from "./CartIcon.module.css";

const CartIcon = ({ amount }) => (
  <div className={s.container}>
    <Link to="/cart">
      <img
        src="https://image.flaticon.com/icons/svg/263/263142.svg"
        width="40"
        alt=""
      />
      <span className={s.amount}>{ amount }</span>
    </Link>
  </div>
);

export default CartIcon;
