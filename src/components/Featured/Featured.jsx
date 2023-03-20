import React from "react";
import "../Featured/Featured.scss";
import techpoint from "../../assets/images/png/techpoint.png";
import theGuardian from "../../assets/images/png/theguardian.png";
import techcrunch from "../../assets/images/png/techcrunch.png";

export default function Featured() {
  return (
    <div>
      <section className="section-featured">
        <div className="featured-container">
          <div className="featured-heading">
            <h3>As featured in</h3>
          </div>
          <div className="featured-in">
            <img src={techpoint} alt="" className="featured-images" />
            <img src={theGuardian} alt="" className="featured-images" />
            <img src={techcrunch} alt="" className="featured-images" />
          </div>
        </div>
      </section>
    </div>
  );
}
