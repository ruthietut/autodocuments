import React from "react";
import Heroimg from "../assets/HeroImage.jpg";
import "./HeroImgStyles.css"
import {Link } from "react-router-dom"

const HeroImg = () => {
  return (
    <div className="Hero-img">
        <div className="mask">
      <img src={Heroimg} alt="heroimg"/>
      </div>
      <div className="hero-content">
        <h1>AUTODOCS</h1>
        <p>Your one stop shop for vehicle documentations</p>
        <small>...always reliable</small>
        <div className="btn">
            <Link to="/SignUp"><button >Get Started</button></Link>
            
        </div>
      </div>
    </div>
  );
};

export default HeroImg;
