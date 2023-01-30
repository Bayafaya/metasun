import React, { useEffect, useState} from "react";
import style from "./SunTry.module.scss";
import { useScrollDirection } from "react-use-scroll-direction";

function SunTry() {
  const [scale, setScale] = useState(1.4);
  const { isScrollingUp, isScrollingDown } = useScrollDirection();
  useEffect(()=>{
    scaleChange();
  },[])
  const scaleChange = ()=>{
    const body = document.querySelector('body');
    const bodyHeight = body.clientHeight;
    const whereIam = window.pageYOffset;
    const bodyWidth = window.innerWidth;
    let defaultScale = 1.4;
    if(bodyWidth < 980 ){
      let defaultScale = 1;
      const percentWhereIam = (whereIam/( bodyHeight - window.innerHeight)) * 100;
      // -----------------scale-------------------
          setScale(defaultScale * (1 - percentWhereIam / 100)) 
    }
    else{  
      const percentWhereIam = (whereIam/( bodyHeight - window.innerHeight)) * 100;
      // -----------------scale-------------------
          setScale(defaultScale * (1 - percentWhereIam / 100)) 

    }
 

// ------------------------------------

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
