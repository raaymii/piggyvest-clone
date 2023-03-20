import React from "react";
import Buttons from "../Buttons/Buttons";
import "../Customers/Customers.scss";

export default function Customers() {
  return (
    <div>
      <section className="section-customers">
        <div className="customers-container">
          <div className="animation-testimonials"></div>
          <div className="customers">
            <h3>4 Million + customers</h3>
            <p>
              Since launching in 2016, over 4,000,000 people have used PiggyVest
              to manage their money better, avoid over-spending and be more
              accountable.
            </p>
            <Buttons />
          </div>
        </div>
      </section>
    </div>
  );
}
