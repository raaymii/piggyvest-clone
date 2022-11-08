import React from "react";

export default function Navbar() {
  return (
    <>
      <nav className="navbar">
        <ul className="main-list">
          <li>
            <img src="../images/logo.svg" className="logo"></img>
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
