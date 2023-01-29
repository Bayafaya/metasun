import React, { useState } from "react";
import style from "./Header.module.scss";
import logo from "../images/Logo.svg";
import Contacts from "./Contacts";
import { useEffect } from "react";
function Header() {
  const [contactsActive, setContactsActive] = useState(false);

  useEffect(() => {
    let url = window.location.href.split("/");
    let target = url[url.length - 1].toLowerCase();
    let element = document.getElementById(target);
    element && element.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  const smoothScroll = (e) => {
    e.preventDefault();
    const blockId = e.target.attributes[0].nodeValue;
    let hero = document.getElementById(blockId);
    hero && hero.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.pushState(`${blockId}`, `${blockId}`, `/${blockId}`);
  };
  return (
    <>
      <header className={style.head}>
        <img src={logo} alt="logo" />
        <nav className={style.navigation}>
          <ul>
            <li>
              <a onClick={(e) => smoothScroll(e)} href="1">
                What We Do
              </a>
              <ul className={style.dropdown}>
                <li>
                  <a onClick={(e) => smoothScroll(e)} href="2">
                    Comprehensive WEB3
                  </a>
                </li>
                <li>
                  <a onClick={(e) => smoothScroll(e)} href="3">
                    Quality assurance
                  </a>
                </li>
                <li>
                  <a onClick={(e) => smoothScroll(e)} href="4">
                    Fast turn around times
                  </a>
                </li>
                <li>
                  <a onClick={(e) => smoothScroll(e)} href="5">
                    Customized solutions
                  </a>
                </li>
                <li>
                  <a onClick={(e) => smoothScroll(e)} href="6">
                    Proven track record
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a onClick={(e) => smoothScroll(e)} href="projects">
                Projects
              </a>
            </li>
          </ul>
        </nav>
        <div  class="hamburger">
    
        </div>

        <div className={style.contacts}>
          <a onClick={() => setContactsActive(true)}>Contacts us</a>
        </div>
      </header>
      <Contacts active={contactsActive} setActive={setContactsActive} />
    </>
  );
}

export default Header;
