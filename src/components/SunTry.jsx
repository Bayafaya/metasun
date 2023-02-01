import React, { useEffect, useState} from "react";
import style from "./SunTry.module.scss";
import { useScrollDirection } from "react-use-scroll-direction";
import './NewHeader.scss'

function SunTry() {
  const [scale, setScale] = useState(1.4);
  const [distance, setDistance] = useState(50);
  const { isScrollingUp, isScrollingDown } = useScrollDirection();
  useEffect(()=>{
    scaleChange();
  },[])
  const scaleChange = ()=>{
    const body = document.querySelector('body');
    const bodyHeight = body.clientHeight;
    const whereIam = window.pageYOffset;
    const bodyWidth = window.innerWidth;
    const percentWhereIam = (whereIam/( bodyHeight - window.innerHeight)) * 100;
    setDistance(Math.round(((percentWhereIam/89) * 1337 )+50))

    if(percentWhereIam > 10){
      document.querySelector(`.${style.sun}`).style.top = '28%'; 
    }
    else{
      document.querySelector(`.${style.sun}`).style.top = '45%';
    }
    if(percentWhereIam > 89){
      document.querySelector(`.${style.distance__of__sun}`).style.display = 'none';
      document.querySelector(`.${style.sun}`).style.display = 'none';
      document.querySelectorAll('[href="1"]')[0].style.color = 'inherit';
      document.querySelectorAll('[href="8"]')[0].style.color = '#fbb92c';

      // document.querySelectorAll('.link__tags')[1].classList.add('active');
      // document.querySelectorAll('.link__tags')[0].classList.remove('active');

      // document.querySelectorAll('[href="1"]')[0].classList.remove('active');
      // document.querySelectorAll('[href="8"]')[0].classList.add('active');
    }
    else{
      document.querySelector(`.${style.distance__of__sun}`).style.display = 'block';
      document.querySelector(`.${style.sun}`).style.display = 'block';
      document.querySelectorAll('[href="8"]')[0].style.color = 'inherit';
      document.querySelectorAll('[href="1"]')[0].style.color = '#fbb92c'

      // document.querySelectorAll('.link__tags')[0].classList.add('active');
      // document.querySelectorAll('.link__tags')[1].classList.remove('active');

      // document.querySelectorAll('[href="1"]')[0].classList.add('active');
      // document.querySelectorAll('[href="8"]')[0].classList.remove('active');
    }
    let defaultScale = 1.4;
    if(bodyWidth < 980 ){
      let defaultScale = 1;

      // -----------------scale-------------------
          setScale(defaultScale * (1 - percentWhereIam / 100)) 
    }
    else{  
      // -----------------scale-------------------
          setScale(defaultScale * (1 - percentWhereIam / 100)) 

    }
 

// ------------------------------------

  }


  useEffect(()=>{
    scaleChange()
  },[window.pageYOffset ,isScrollingUp, isScrollingDown ])


  return (
    <>
     <div className={style.distance__of__sun}>{distance}m.km</div>
     <img
      className={style.sun}
      style={{ transform: `scale(${scale})`}}
      src="/images/sun_cropped.gif"
    />
    </>
  );
}

export default SunTry;
