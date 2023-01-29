import React from "react";
import style from './GlitchBox.module.scss'
function GlitchBox() {
  return (
    <div class={style.glitch}>
      <div class={style.glitch_image}></div>
      <div class={style.glitch_image}></div>
      <div class={style.glitch_image}></div>
      <div class={style.glitch_image}></div>
      <div class={style.glitch_image}></div>
    </div>
  );
}

export default GlitchBox;
