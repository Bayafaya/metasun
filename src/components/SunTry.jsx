import React, { useEffect, useState } from "react";
import style from "./SunTry.module.scss";
import { useScrollDirection } from "react-use-scroll-direction";

function SunTry() {
  const [scale, setScale] = useState(1.4);
  const { isScrollingUp, isScrollingDown } = useScrollDirection();
  const scaleChange = ()=>{
    const body = document.querySelector('body');
    const bodyHeight = body.clientHeight;
    const whereIam = window.pageYOffset;
// ------------------------------------
    const percentWhereIam = (whereIam/( bodyHeight - window.innerHeight)) * 100;
// -----------------scale-------------------
    setScale(1.4 * (1 - percentWhereIam / 100)) 
  }
  useEffect(()=>{
    scaleChange()
  },[window.pageYOffset ,isScrollingUp, isScrollingDown ])

  return (
    <img
      className={style.sun}
      style={{ transform: `scale(${scale})`}}
      src="src/images/sun_cropped.gif"
    />
  );
}

export default SunTry;
