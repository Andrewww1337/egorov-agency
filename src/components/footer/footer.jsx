import React, { useState } from "react";

import { ReactComponent as ArrowRight } from "../../img/arrow-right.svg";
import { ReactComponent as ArrowDown } from "../../img/arrow-down.svg";

import { getNotifi } from "../../fetch/fetch";
import { PopUp } from "../popUp";

import "./footer.css";

export const Footer = ({ otherEventsIsOpen, setOtherEventsIsOpen }) => {
  const [emailNotifiAvailable, setEmailNotifiAvailable] = useState(null);
  const [email, setEmail] = useState(null);

  const getNotificationsOnEmail = () => {
    getEmailNotifiAvailable();
  };

  const getEmailNotifiAvailable = async () => {
    if (
      /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu.test(
        email
      )
    ) {
      setEmailNotifiAvailable(await getNotifi(email));
    } else if (String(email).length > 1) {
      setEmailNotifiAvailable(false);
    }
  };
  return (
    <div className="footerWraper">
      {(emailNotifiAvailable === false || emailNotifiAvailable === true) && (
        <PopUp
          emailNotifiAvailable={emailNotifiAvailable}
          setEmailNotifiAvailable={setEmailNotifiAvailable}
        />
      )}

      <div className="footer">
        <div className="fakeDiv" />
        <div className="inputWithButton">
          <form>
            <input
              placeholder="Enter your Email and get notified"
              className="inputInFooter"
              type="email"
              onChange={(e) => {
                e.preventDefault();
                setEmail(e.currentTarget.value);
              }}
            />

            <button
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                getNotificationsOnEmail();
              }}
              className="inputButton"
            >
              <ArrowRight />
            </button>
          </form>
        </div>
        <div
          onClick={() => {
            setOtherEventsIsOpen(!otherEventsIsOpen);
          }}
          className="footerEventButton"
        >
          <p>Other Events</p>
          <ArrowDown />
        </div>
      </div>
    </div>
  );
};
