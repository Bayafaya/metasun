import React, { useEffect, useState } from "react";
import Contacts from "./Contacts";
import './NewHeader.scss'

function NewHeader({active,setActive}) {


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

    <div class="top-nav">
      <div><img src="/images/Logo.svg" alt="Logo" /></div>
      <input id="menu-toggle" type="checkbox" />
      <label class="menu-button-container" for="menu-toggle">
        <div class="menu-button"></div>
      </label>
      <ul class="menu">
        <li>
          <a  onClick={(e) => smoothScroll(e)} href="1">What we do</a>
          {/* <ul class="dropdown">
            <li>
              <a onClick={(e) => smoothScroll(e)} href="1">Comprehensive WEB3</a>
            </li>
            <li >
              <a onClick={(e) => smoothScroll(e)} href="2">Quality assurance</a>
            </li>
            <li>
              <a onClick={(e) => smoothScroll(e)} href="3">Fast turn around times</a>
            </li>
            <li>
              <a onClick={(e) => smoothScroll(e)} href="4">Customized solutions</a>
            </li>
            <li>
              <a onClick={(e) => smoothScroll(e)} href="5">Proven track record</a>
            </li>
          </ul> */}
        </li>
        <li ><a onClick={(e) => smoothScroll(e)} href="8">Projects</a></li>
        <li onClick={() => setActive(true)}><a >contact us</a></li>
      </ul>
    </div>
    <Contacts active={active} setActive={setActive} />
    </>
  );
}

export default NewHeader;
