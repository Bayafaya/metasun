import React from "react";
import style from "./Header.module.scss";
import logo from "../images/Logo.svg";

function Header() {
  return (
    <header className={style.head}>
      <img src={logo} alt="logo" />
      <nav className={style.navigation}>
        <ul>
          <li><a href="#">What We Do</a></li>
          <li><a href="#">Projects</a></li>
        </ul>
      </nav>
      <div className={style.contacts}>
      <a href="#">Contacts us</a>
      </div>
    </header>
  );
}

export default Header;
