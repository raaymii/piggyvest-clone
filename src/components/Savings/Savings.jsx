import React from "react";

import automated from "../../assets/images/png/piggy.png";
import piggybank from "../../assets/images/svg/blue-arrow.svg";
import safelock from "../../assets/images/png/safelock.png";
import safelockarrow from "../../assets/images/svg/safelock-arrow.svg";
import target from "../../assets/images/png/target.png";
import targetarrow from "../../assets/images/svg/target-arrow.svg";
import flex from "../../assets/images/png/flex.png";
import flexarrow from "../../assets/images/svg/flex-arrow.svg";
import "../Savings/Savings.scss";

export default function Savings() {
  return (
    <section className="section-savings">
      <div className="savings-container">
        <div className="savings-plan">
          <h2>4 ways to build your savings</h2>
          <p>Earn 5%-15% when you save with any of these PiggyVest plans.</p>
          <button>Start Saving</button>
        </div>
        <div className="savings-options">
          <img src={automated} alt="" />
          <h3>Automated Savings</h3>
          <p>
            Build a dedicated savings faster on your terms automatically or
            manually.
          </p>
          <a href="#">
            <img src={piggybank} alt="" />
            Piggybank
          </a>
        </div>

        <div className="savings-options">
          <img src={safelock} alt="" />
          <h3>Fixed Savings</h3>
          <p>
            Lock money away for a fixed duration with no access to it until
            maturity. It’s like having a custom fixed deposit.
          </p>
          <a href="#">
            <img src={safelockarrow} alt="" />
            Safelock
          </a>
        </div>

        <div className="savings-options">
          <img src={target} alt="" />
          <h3> Goal-Oriented Savings</h3>
          <p>
            Build a dedicated savings faster on your terms automatically or
            manually.
          </p>
          <a href="#">
            <img src={targetarrow} alt="" />
            Target Savings
          </a>
        </div>

        <div className="savings-options">
          <img src={flex} alt="" />
          <h3>Flexible Savings</h3>
          <p>
            Build a dedicated savings faster on your terms automatically or
            manually.
          </p>
          <a href="#">
            <img src={flexarrow} alt="" />
            Flex Naira
          </a>
        </div>
      </div>
    </section>
  );
}
