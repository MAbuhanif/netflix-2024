import React, { useState, useEffect } from "react";
import "../Header/header.css";
import logo from "../../assets/Images/Netflix-logo.png"

function Header() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll", handleShow);
    };
  }, []);
  return (
    <div className={`nav ${show && "nav__black"} `}>
      <img
        className="nav__logo"
        src={logo}
        alt="Netflix logo"
      />
      <img
        className="nav__avatar"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="Avatur logo"
      />
    </div>
  );
}

export default Header;
