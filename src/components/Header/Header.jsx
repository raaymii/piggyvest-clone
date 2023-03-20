import React from "react";
import rect from "../../assets/images/png/rect.png";
import headerImg from "../../assets/images/png/headerImg.png";
import circle from "../../assets/images/svg/circle.svg";
import cross from "../../assets/images/svg/cross.svg";
import innercircle from "../../assets/images/svg/innercircle.svg";
import myrent from "../../assets/images/png/card1.png";
import investify from "../../assets/images/png/card2.png";
import "../Header/Header.scss";
import "../Buttons/Buttons.jsx";
import Buttons from "../Buttons/Buttons.jsx";

export default function Hero() {
  return (
    <>
      <header className="header">
        <div className="header-container">
          <div className="hero">
            <h1>The Better Way to Save & Invest.</h1>
            <p>
              PiggyVest helps over 4 million customers achieve their financial
              goals by helping them save and invest with ease.
            </p>
            <Buttons />
          </div>
          <div className="hero-image">
            <div className="hero-entities">
              <img src={rect} alt="rect" className="rect" />
              <img
                src={headerImg}
                alt="Header Image"
                className="header-image"
              />
              <img src={circle} alt="" className="circle" />
              <img src={cross} alt="" className="cross" />
              <img src={innercircle} alt="" className="innercircle" />
              <img src={myrent} alt="" className="myrent" />
              <img src={investify} alt="" className="investify" />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
