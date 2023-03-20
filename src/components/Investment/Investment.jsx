import React from "react";
import "../Investment/Investment.scss";
import circleinvesticon from "../../assets/images/svg/investicon.svg";
import dotinvesticon from "../../assets/images/svg/dotinvesticon.svg";
import phoneinvest from "../../assets/images/png/invest-phone.png";

export default function Investment() {
  return (
    <div>
      <section className="section-investment">
        <div className="investment-container">
          <div className="investment-image">
            <img src={circleinvesticon} alt="" className="circleinvesticon" />
            <img src={phoneinvest} alt="" className="phoneinvest" />
            <img src={dotinvesticon} alt="" className="dotinvesticon" />
          </div>
          <div className="investment-writeup">
            <div className="bonus">
              <p>Up to 25% Returns</p>
            </div>
            <h2>Access Investment Opportunities</h2>
            <p className="invest-p">
              Invest securely and confidently on the go. Grow your money
              confidently by investing in pre-vetted investment opportunities.
            </p>
            <a href="#" className="invest-link">
              Learn more about Investments &#62;
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
