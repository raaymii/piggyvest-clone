import React from "react";
import "../Footer/Footer.scss";
import footerLogo from "../../assets/images/svg/logo.svg";
import auditLogo from "../../assets/images/svg/audit.webp";

export default function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-logo">
            <img src={footerLogo} alt="" className="logo-footer" />
            <img src={auditLogo} alt="" className="logo-audit" />
          </div>
          <div className="footer-products">
            <h6>Products</h6>
            <ul>
              <li>Piggybank</li>
              <li>Invest</li>
              <li>Safelock</li>
              <li>Target Savings</li>
              <li>Flex Naira</li>
            </ul>
          </div>
          <div className="footer-company">
            <h6>Company</h6>
            <ul>
              <li>About</li>
              <li>FAQs</li>
              <li>Blog</li>
            </ul>
          </div>
          <div className="footer-legal">
            <h6>Legal</h6>
            <ul>
              <li>Terms</li>
              <li>Privacy</li>
              <li>Security</li>
            </ul>
          </div>
          <div className="footer-contact">
            <ul className="social-icons">
              <a href="#">
                <li>
                  <ion-icon name="logo-facebook"></ion-icon>
                </li>
              </a>
              <a href="#">
                <li>
                  <ion-icon name="logo-twitter"></ion-icon>
                </li>
              </a>
              <a href="#">
                <li>
                  <ion-icon name="logo-instagram"></ion-icon>
                </li>
              </a>
            </ul>
            <ul className="contact-us">
              <li>
                Tesmot house, Abdulrahman Okene close, Victoria Island, Lagos,
                Nigeria.
              </li>
              <li>contact@piggyvest.com</li>
              <li>+234 700 933 933 933</li>
            </ul>
          </div>
        </div>
        <div className="footer-paragraph">
          <p>
            Piggyvest (formerly piggybank.ng) is the leading online savings &
            investing platform in Nigeria. For over 6 years, our customers have
            saved and invested billions of Naira that they would normally be
            tempted to spend.
          </p>
          <a href="#">2016 - 2022 PiggyTech Global Limited - RC 1405222</a>
        </div>
      </footer>
    </div>
  );
}
