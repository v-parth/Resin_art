import React from "react";
import { useNavigate } from "react-router-dom";
import "../style/IntroAnimation.css";

import blueButterfly from "../assets/blue.png";
import orangeButterfly from "../assets/pink.png";
import backgroundImage from "../assets/darkback.jpg";

function IntroAnimation() {

  const navigate = useNavigate();

  const handleExplore = () => {
    navigate("/home");
  };

  return (
    <>
      <div id="intro">

        <div
          className="bg-image"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        ></div>

        <img
          src={blueButterfly}
          alt="Blue Butterfly"
          className="butterfly left"
        />

        <img
          src={orangeButterfly}
          alt="Orange Butterfly"
          className="butterfly right"
        />

        <div className="smoke"></div>

      </div>

      <div className="content">

        <h1>Your Dream Deserves To Become A Brand</h1>

        <p>
          This website is my small gift to your big journey. ❤️
        </p>

        <button
          id="surpriseBtn"
          onClick={handleExplore}
        >
          Explore Now
        </button>

      </div>
    </>
  );
}

export default IntroAnimation;