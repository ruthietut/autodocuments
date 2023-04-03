import React from "react";
import autodocslogo from "../assets/autodocs-Logo.png";
import "./Navstyles.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav-container">
      <img src={autodocslogo} alt="autodocs logo" />

      <ul className="nav-menu ">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/PricingPage">Check Prices</Link>
        </li>
        <button>
          <Link to="/SignUp">SignUp</Link>
        </button>
      </ul>
    </div>
  );
};

export default Nav;
