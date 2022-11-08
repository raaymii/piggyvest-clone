import React from "react";
import rect from "../images/rect.png";
import headerImg from "../images/headerImg.png";
import circle from "../images/circle.svg";
import cross from "../images/cross.svg";
import innercircle from "../images/innercircle.svg";
import myrent from "../images/card1.png";
import investify from "../images/card2.png";

export default function Hero() {
  return (
    <>
      <header className="header">
        <div className="hero">
          <h1>The Better Way to Save & Invest.</h1>
          <p>
            PiggyVest helps over 4 million customers achieve their financial
            goals by helping them save and invest with ease.
          </p>
          <button className="btn-cta">Create free account</button>
          <div className="btn-playstore">
            <button>
              <ion-icon name="logo-apple"></ion-icon>Get on iPhone
            </button>
            <button>
              <ion-icon name="logo-google-playstore"></ion-icon>Get on Android
            </button>
          </div>
        </div>
        <div className="hero-image">
          <img src={rect} alt="rect" className="rect" />
          <img src={headerImg} alt="Header Image" className="header-image" />
          <img src={circle} alt="" className="circle" />
          <img src={cross} alt="" className="cross" />
          <img src={innercircle} alt="" className="innercircle" />
          <img src={myrent} alt="" className="myrent" />
          <img src={investify} alt="" className="investify" />
        </div>
      </header>
    </>
  );
}
