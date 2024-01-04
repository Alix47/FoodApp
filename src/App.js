import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body.js";


// Footer component for footer section
const Footer = () => {
  return (
    <div className="footer">
      Created By
      <i class="fa-solid fa-heart"></i>
      <a href="#" target="_blank">
        ALI
      </a>
      <i class="fa-solid fa-copyright"></i>2023
      <strong>
        Food<span>Fire</span>
      </strong>
    </div>
  );
};

// AppLayout component to show: Header, Body, Footer
const AppLayout = () => {
  return (
    <React.Fragment>
      <Header />
      <Body />
      <Footer />
    </React.Fragment>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);