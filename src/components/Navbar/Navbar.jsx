import React from "react";
import logo from "../../assets/images/svg/logo.svg";
import "../Navbar/Navbar.scss";

export default function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <img src={logo} className="logo"></img>
          </div>
          <div className="main-nav">
            <ul className="main-nav-list">
              <a href="#">
                <li>Save</li>
              </a>
              <a href="#">
                <li>Invest</li>
              </a>
              <a href="#">
                <li>Stories</li>
              </a>
              <a href="#">
                <li>FAQs</li>
              </a>
              <a href="#">
                <li>Blog</li>
              </a>
            </ul>
          </div>

          <div className="btn-div">
            <ul className="nav-btn-list">
              <a href="#">
                <li>
                  <button className="nav-btn">Sign in</button>
                </li>
              </a>
              <a href="#">
                <li>
                  <button className="nav-btn-cta">Create free account</button>
                </li>
              </a>
            </ul>
          </div>

          <div className="mobile-nav">
            <ion-icon name="menu"></ion-icon>
          </div>
        </div>
      </nav>
    </>
  );
}
