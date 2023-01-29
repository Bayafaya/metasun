import React from "react";
import { useEffect } from "react";
import style from './Matrix.module.scss'
function Matrix() {
    useEffect(()=>{
        let canvas = document.getElementById( 'canvas' ),
        ctx = canvas.getContext( '2d' ),
            // full screen dimensions
            cw = 568,
            ch = 320,
        charArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'],
        maxCharCount = 100,
        fallingCharArr = [],
        fontSize = 12,
        maxColums = cw/(fontSize);
        canvas.width = cw;
        canvas.height = ch;
    
    
        function randomInt( min, max ) {
            return Math.floor(Math.random() * ( max - min ) + min);
        }
    
        function randomFloat( min, max ) {
            return Math.random() * ( max - min ) + min;
        }
    
        function Point(x,y)
        {
          this.x = x;
          this.y = y;
        }
    
        Point.prototype.draw = function(ctx){
    
          this.value = charArr[randomInt(0,charArr.length-1)].toUpperCase();
          this.speed = randomFloat(1,7);
    
    

    
            ctx.fillStyle = "#0F0";
            ctx.font = fontSize+"px san-serif";
            ctx.fillText(this.value,this.x,this.y);
    
    
    
            this.y += this.speed;
            if(this.y > ch)
            {
              this.y = randomFloat(-100,0);
              this.speed = randomFloat(2,5);
            }
        }
    
        for(let i = 0; i < maxColums ; i++) {
          fallingCharArr.push(new Point(i*fontSize,randomFloat(-500,0)));
        }
    
    
        let update = function()
        {
    
        ctx.fillStyle = "rgba(0,0,0,0.05)";
        ctx.fillRect(0,0,cw,ch);
    
    
          let i = fallingCharArr.length;
    
          while (i--) {
            fallingCharArr[i].draw(ctx);
            let v = fallingCharArr[i];
          }
    
          requestAnimationFrame(update);
        }
    
      update();
    },[])
   
  return (
    <div>
      <canvas className={style.canvases} id="canvas">Canvas is not supported in your browser.</canvas>

    </div>
  );
}

export default Matrix;
