import React, { useState, useEffect } from "react";

import { ReactComponent as Logo } from "../../img/Logo.svg";
import { ReactComponent as Days } from "../../img/Days.svg";
import { ReactComponent as Hours } from "../../img/Hours.svg";
import { ReactComponent as Minutes } from "../../img/Minures.svg";
import { ReactComponent as Seconds } from "../../img/Seconds.svg";
import { ReactComponent as Arrow } from "../../img/arrow-right.svg";
import { ReactComponent as Left } from "../../img/LeftUxo.svg";
import { ReactComponent as Right } from "../../img/rightUxo.svg";
import { ReactComponent as LDays } from "../../img/ld.svg";
import { ReactComponent as LHours } from "../../img/lh.svg";
import { ReactComponent as LMinutes } from "../../img/lm.svg";
import { ReactComponent as LSeconds } from "../../img/ls.svg";

import "./mainComponent.css";

export const MainComponent = ({ windowDimenion }) => {
  const [seconds, setSeconds] = useState(null);
  const [minutes, setMinutes] = useState(null);
  const [hours, setHours] = useState(null);
  const [days, setDays] = useState(null);

  const getTime = () => {
    const date = Date.parse(new Date());
    const t = Date.parse(new Date("07 24 2023")) - date;
    setSeconds(Math.floor((t / 1000) % 60));
    setMinutes(Math.floor((t / 1000 / 60) % 60));
    setHours(Math.floor((t / (1000 * 60 * 60)) % 24));
    setDays(Math.floor(t / (1000 * 60 * 60 * 24)));
  };

  useEffect(() => {
    const timer = setInterval(getTime, 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="mainComponent">
      <Left className="left" /> <Right className="right" />
      <div className="logoSection">
        <Logo />
        {}
      </div>
      <div className="titleSection">
        <h1>Under Construction</h1>
        <p>We're making lots of improvements and will be back soon</p>
      </div>
      <div className="counter">
        <p>
          {" "}
          <span>
            {days < 10 && "0"}
            {days}
            {windowDimenion.winWidth > 1280 ? (
              <Days className="lineUnderTine" />
            ) : (
              <LDays className="lineUnderTine" />
            )}
          </span>
          :
          <span>
            {hours < 10 && "0"}
            {hours}
            {windowDimenion.winWidth > 1280 ? (
              <Hours className="lineUnderTine" />
            ) : (
              <LHours className="lineUnderTine" />
            )}
          </span>
          :
          <span>
            {minutes < 10 && "0"}
            {minutes}
            {windowDimenion.winWidth > 1280 ? (
              <Minutes className="lineUnderTine" />
            ) : (
              <LMinutes className="lineUnderTine" />
            )}
          </span>
          :
          <span>
            {seconds < 10 && "0"}
            {seconds}
            {windowDimenion.winWidth > 1280 ? (
              <Seconds className="lineUnderTine" />
            ) : (
              <LSeconds className="lineUnderTine" />
            )}
          </span>
        </p>
      </div>
      <div className="linkSection">
        <p>Check our event page when you wait:</p>
        <a
          className="linkButton"
          href="https://www.linkedin.com/in/andrew-kirichenko/"
        >
          Go to the event <Arrow />
        </a>
      </div>
    </div>
  );
};
