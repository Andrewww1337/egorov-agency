import React from "react";

import { ReactComponent as Cross } from "../../img/cross.svg";

import "./popUp.css";

export const PopUp = ({ setEmailNotifiAvailable, emailNotifiAvailable }) => {
  return (
    <div className="popUp">
      <div className="popUpMessageWindow">
        <Cross
          onClick={() => {
            setEmailNotifiAvailable(null);
          }}
          className="crossWindow"
        />
        <h3 className="popUpTitle">
          {emailNotifiAvailable ? "success!" : "unsuccess!"}
        </h3>
        <p className="aboutSubscribe">
          {emailNotifiAvailable
            ? "You have successfully subscribed to the email newsletter"
            : "Server error or incorrect Email"}
        </p>
        <button
          onClick={() => {
            setEmailNotifiAvailable(null);
          }}
          className="popUpButton"
        >
          Close
        </button>
      </div>
    </div>
  );
};
