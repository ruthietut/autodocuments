import React from "react";
import "./StepsStyles.css";
const Steps = () => {
  return (
    <div className="steps-container">
      <div className="steps">
        <h2>3 Basic steps</h2>
      </div>
      <div className="process">
        <h3>Step 1: Select stage</h3>
        

        <ul className="list">
          <li className="upper">
            Register a new vehicle
            <ul className="inner">
              <li>Bike</li>
              <li>Car</li>
              <li>Truck</li>
            </ul>
          </li>
          <li className="upper">
            Renew vehicle papers
            <ul className="inner">
              <li>Vehicle License</li>
              <li>Roadworthiness</li>
              <li>Insurance</li>
              <li>Hackney permit</li>
            </ul>
          </li>
        </ul>
        <h3>Step 2: Select Vehicle Type</h3>
        <ul>
            <li>Motorcycle</li>
            <li>Saloon Car</li>
            <li>SUV</li>
            <li></li>
        </ul>

      </div>
    </div>
  );
};

export default Steps;
