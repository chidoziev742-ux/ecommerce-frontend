import React from "react";
import "./hero.css";
import handIcon from "../assets/handicon.png";
import arrow_icon from "../assets/arrow.png";
import hero_image from "../assets/heroimage.png";


const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>NEW ARRIVALS ONLY</h2>

        <div className="hero-hand-icon">
          <p>new</p>
          <img src={handIcon} alt="hand icon" />
        </div>

        <p>collections</p>
        <p>for everyone</p>

        <div className="hero-latest-btn">
          <div>
            latest collection
            <img src={arrow_icon} alt="arrow icon" />
          </div>
        </div>
      </div>

      <div className="hero-right">
        <img src={hero_image} alt="hero" />
      </div>
    </div>



  );
};




export default Hero;
