import React from "react";

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
          <img src="../images/rect.png" alt="rect" className="rect" />
          <img
            src="../images/headerImg.png"
            alt="Header Image"
            className="header-image"
          />
          <img src="../images/circle.svg" alt="" className="circle" />
          <img src="../images/cross.svg" alt="" className="cross" />
          <img src="../images/innercircle.svg" alt="" className="innercircle" />
          <img src="../images/card1.png" alt="" className="myrent" />
          <img src="../images/card2.png" alt="" className="investify" />
        </div>
      </header>
    </>
  );
}
