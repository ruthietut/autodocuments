import React from "react";
import "./StepsStyles.css";
import {
  FaList,
  FaCar,
  FaRegThumbsUp,
  FaCcMastercard,
} from "react-icons/fa";

const Steps = () => {
  return (
    <div className="steps-container">
      <h2>3 Basic steps to get started</h2>

      <div className="process">
        <div className="card">
          <FaList
            size={100}
            style={{ color: "#fff", marginRight: "3rem", borderRadius:"50%" }}
            
          />
          <h3>Step 1: Document Type</h3>

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
          <p>You can select any document type</p>
        </div>
        <div className="card">
          <FaCar size={100}  style={{ color: "#fff", marginRight: "3rem" }} />
          <h3>Step 2: Select Vehicle Type</h3>
          <ul className="inner">
            <li>Motorcycle</li>
            <li>Saloon Car</li>
            <li>SUV</li>
            <li>Coaster Bus</li>
            <li>Space Bus</li>
            <li>Truck</li>
          </ul>
          <p>
            Specify vehicle typle and provide a few more details then you will
            get a price quota on either one specified
          </p>
        </div>
        <div className="card">
          <FaCcMastercard
            size={100}
            style={{ color: "#fff", marginRight: "3rem"}}
          />
          <h3>Step 3: Make payment</h3>
          <p>Proceed to make payment by either card or bank transfer</p>
          <small>100% Refund available and guaranteed</small>
        </div>
      </div>
      <div className="done">
        <FaRegThumbsUp
          size={100}
          style={{ color: "#fff", marginRight: "3rem"}}
        />
        <h3>Done within 24hrs</h3>
        <p>
          Once all steps are completed,your documents are processed immediatly within
          24HRS(with picture proof) and delivered next day
        </p>
      </div>
    </div>
  );
};

export default Steps;
