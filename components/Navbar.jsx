import React from "react";
import logo from "../images/logo.svg";

export default function Navbar() {
  return (
    <>
      <nav className="navbar">
        <ul className="main-list">
          <li>
            <img src={logo} className="logo"></img>
          </li>
          <li>Save</li>
          <li>Invest</li>
          <li>Stories</li>
          <li>FAQs</li>
          <li>Blog</li>
          <li>
            <button> Sign in</button>
          </li>
          <li>
            <button>Create free account</button>
          </li>
          <div className="mobile-nav">
            <ion-icon name="menu"></ion-icon>
          </div>
        </ul>
      </nav>
    </>
  );
}
