import React from "react";
import Header from "../../Header/Header";
import Navbar from "../../Navbar/Navbar";
import Security from "../../Security/Security";
import Savings from "../../Savings/Savings";
import Investment from "../../Investment/Investment";
import Saver from "../../Saver/Saver";
import Customers from "../../Customers/Customers";
import Featured from "../../Featured/Featured";
import Footer from "../../Footer/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <Security />
      <Savings />
      <Investment />
      <Saver />
      <Customers />
      <Featured />
      <Footer />
    </div>
  );
}
