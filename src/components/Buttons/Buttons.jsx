import React from "react";
import "../Buttons/Buttons.scss";

export default function Buttons() {
  return (
    <div>
      <a href="#" className="btn-cta">
        <button>Create free account</button>
      </a>
      <div className="btn-playstore">
        <a href="#" className="btn-store">
          <button>
            <ion-icon name="logo-apple"></ion-icon>Get on iPhone
          </button>
        </a>
        <a href="#" className="btn-store">
          <button>
            <ion-icon name="logo-google-playstore"></ion-icon>Get on Android
          </button>
        </a>
      </div>
    </div>
  );
}
