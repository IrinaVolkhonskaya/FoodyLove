//on hooks
import React, { useState, useEffect, useRef } from "react";
import Dropdown from "./Dropdown/Dropdown";
import { Button } from "@material-ui/core";

import s from "./UserMenu.module.css";
import './UserMenu.css';



export default function UserMenu({ user: { name }, onSignOut = () => null }) {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const containerRef = useRef();

  useEffect(() => {
    window.addEventListener("click", handleWindowClick);

    return () => {
      window.removeEventListener("click", handleWindowClick);
    };
  });

  const handleWindowClick = (e) => {
    // console.log(`containerRef.current: `, containerRef.current);

    const isTargetInsideContainer = containerRef.current.contains(e.target);

    if (isDropDownOpen && !isTargetInsideContainer) {
      handleCloseDropdown();
    }
  };

  const handleOpenDropdown = () => {
    setIsDropDownOpen(true);
  };

  const handleCloseDropdown = () => {
    setIsDropDownOpen(false);
  };

  return (
    <div
      className={s.container}
      onClick={handleOpenDropdown}
      ref={containerRef}
    >
      <img
        className={s.image}
        src="https://www.redditstatic.com/new-icon.png"
        width="40"
        height="40"
        alt=""
      />
      <span className={s.name}>{name}</span>
      {isDropDownOpen && <Dropdown />}
      <Button
        className="button_signout"
        variant="contained"
        color="primary"
        size="small"
        label="Sign out"
        onClick={onSignOut}
      >
        SignOut
      </Button>
    </div>
  );
}

