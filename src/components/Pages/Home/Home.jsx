import React from "react";
import Header from "../../Header/Header";
import Navbar from "../../Navbar/Navbar";
import Security from "../../Security/Security";
import Savings from "../../Savings/Savings";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <Security />
      <Savings />
    </div>
  );
}
