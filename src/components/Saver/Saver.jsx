import React from "react";
import "../Saver/Saver.scss";
import saverImage from "../../assets/images/png/saver-image.jpg";
import arrow from "../../assets/images/svg/saver.svg";

export default function Saver() {
  return (
    <div>
      <section className="section-saver">
        <div className="saver-month">
          <div className="saver">
            <h2>Meet the saver of the month!</h2>
            <p>
              Every month, we shine a spotlight on one saver, asking them
              questions about their savings culture and how the product is
              specifically helping them shape how they spend and save for future
              responsibilities.
            </p>
            <a href="#" className="saver-link">
              <img src={arrow} alt="" />
              Meet Tito
            </a>
          </div>
          <div className="saver-image">
            <img src={saverImage} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
}
