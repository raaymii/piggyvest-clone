import React from "react";
import "../Saver/Saver.scss";
import saverImage from "../../assets/images/png/saver-image.jpg";

export default function Saver() {
  return (
    <div>
      <section className="section-saver">
        <div className="saver">
          <h2>Meet the saver of the month!</h2>
          <p>
            Every month, we shine a spotlight on one saver, asking them
            questions about their savings culture and how the product is
            specifically helping them shape how they spend and save for future
            responsibilities.
          </p>
        </div>
        <div className="saver-image">
          <img src={saverImage} alt="" />
        </div>
      </section>
    </div>
  );
}
