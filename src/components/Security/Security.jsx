import React from "react";
import securitylogo from "../../assets/images/png/security.png";

export default function Security() {
  return (
    <section className="section-security">
      <div className="security-container">
        <div className="securitylogo">
          <img src={securitylogo} />
        </div>
        <div className="security-content">
          <h2>Your security is our priority</h2>
          <p>
            Piggyvest uses the highest level of Internet Security and it is
            secured by 256 bits SSL security encryption to ensure that your
            information is completely protected from fraud.
          </p>
          <a href="#">Learn more &#62;</a>
        </div>
      </div>
    </section>
  );
}
