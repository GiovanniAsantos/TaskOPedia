import React from "react";
import ReactDOM from "react-dom/client";
import "./CSS/style.css";
import MainBody from "./MainBody";
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div style={{ backgroundColor: "black", color: "gray" }}>
    <Header />
    <div className="px-4">
      <MainBody />
    </div>
    <Footer />
  </div>
);
