import React, { useState, useEffect } from "react";

import "./littleAccordion.css";

export const LittleAccordion = () => {
  const [activeNumber, setActiveNumber] = useState(1);
  return (
    <div className="littleAccordionSection">
      <h3 className="littleAccordionTitle">All events</h3>
      <div className="littleContainer">
        <div className="littleAccordion">
          <div className="oneLittleAccordion">
            <div
              onClick={() => {
                setActiveNumber(1);
              }}
              className={
                activeNumber === 1
                  ? "littleAccordion-header"
                  : "littleAccordion-headerNone"
              }
            >
              <p className="littleCardNumber">01</p>
              <p className="littleHeaderTitle">Meeting</p>
            </div>
            <div
              className={
                activeNumber === 1
                  ? "littleAccordion-content-on"
                  : "littleAccordion-content"
              }
            >
              <div
                className={
                  activeNumber === 1 ? "littleAboutCard" : "littleAboutCardNone"
                }
              >
                <a
                  href="https://www.linkedin.com/in/andrew-kirichenko/"
                  className="littleAboutButton"
                >
                  More information
                </a>
                <p>13.03.2023</p>
                <h3>Meeting</h3>
              </div>
              <img
                className="littlecardImg"
                src="https://proprikol.ru/wp-content/uploads/2021/01/kartinki-schastlivyh-lyudej-33.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="oneLittleAccordion">
            <div
              onClick={() => {
                setActiveNumber(2);
              }}
              className={
                activeNumber === 2
                  ? "littleAccordion-header"
                  : "littleAccordion-headerNone"
              }
            >
              <p className="littleCardNumber">02</p>
              <p className="littleHeaderTitle">Meeting</p>
            </div>
            <div
              className={
                activeNumber === 2
                  ? "littleAccordion-content-on"
                  : "littleAccordion-content"
              }
            >
              <div
                className={
                  activeNumber === 2 ? "littleAboutCard" : "littleAboutCardNone"
                }
              >
                <a
                  href="https://www.linkedin.com/in/andrew-kirichenko/"
                  className="littleAboutButton"
                >
                  More information
                </a>
                <p>13.03.2023</p>
                <h3>Meeting</h3>
              </div>
              <img
                className="littlecardImg"
                src="https://proprikol.ru/wp-content/uploads/2021/01/kartinki-schastlivyh-lyudej-33.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="oneLittleAccordion">
            <div
              onClick={() => {
                setActiveNumber(3);
              }}
              className={
                activeNumber === 3
                  ? "littleAccordion-header"
                  : "littleAccordion-headerNone"
              }
            >
              <p className="littleCardNumber">03</p>
              <p className="littleHeaderTitle">Party</p>
            </div>
            <div
              className={
                activeNumber === 3
                  ? "littleAccordion-content-on"
                  : "littleAccordion-content"
              }
            >
              <div
                className={
                  activeNumber === 3 ? "littleAboutCard" : "littleAboutCardNone"
                }
              >
                <a
                  href="https://www.linkedin.com/in/andrew-kirichenko/"
                  className="littleAboutButton"
                >
                  More information
                </a>
                <p>13.03.2023</p>
                <h3>Party</h3>
              </div>
              <img
                className="littlecardImg"
                src="https://proprikol.ru/wp-content/uploads/2021/01/kartinki-schastlivyh-lyudej-33.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="oneLittleAccordion">
            <div
              onClick={() => {
                setActiveNumber(4);
              }}
              className={
                activeNumber === 4
                  ? "littleAccordion-header"
                  : "littleAccordion-headerNone"
              }
            >
              <p className="littleCardNumber">04</p>
              <p className="littleHeaderTitle">Party on the beach</p>
            </div>
            <div
              className={
                activeNumber === 4
                  ? "littleAccordion-content-on"
                  : "littleAccordion-content"
              }
            >
              <div
                className={
                  activeNumber === 4 ? "littleAboutCard" : "littleAboutCardNone"
                }
              >
                <a
                  href="https://www.linkedin.com/in/andrew-kirichenko/"
                  className="littleAboutButton"
                >
                  More information
                </a>
                <p>13.03.2023</p>
                <h3>Party on the beach</h3>
              </div>
              <img
                className="littlecardImg"
                src="https://proprikol.ru/wp-content/uploads/2021/01/kartinki-schastlivyh-lyudej-33.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="oneLittleAccordion">
            <div
              onClick={() => {
                setActiveNumber(5);
              }}
              className={
                activeNumber === 5
                  ? "littleAccordion-header"
                  : "littleAccordion-headerNone"
              }
            >
              <p className="littleCardNumber">05</p>
              <p className="littleHeaderTitle">Home Security</p>
            </div>
            <div
              className={
                activeNumber === 5
                  ? "littleAccordion-content-on"
                  : "littleAccordion-content"
              }
            >
              <div
                className={
                  activeNumber === 5 ? "littleAboutCard" : "littleAboutCardNone"
                }
              >
                <a
                  href="https://www.linkedin.com/in/andrew-kirichenko/"
                  className="littleAboutButton"
                >
                  More information
                </a>
                <p>13.03.2023</p>
                <h3>Home Security</h3>
              </div>
              <img
                className="littlecardImg"
                src="https://proprikol.ru/wp-content/uploads/2021/01/kartinki-schastlivyh-lyudej-33.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="oneLittleAccordion">
            <div
              onClick={() => {
                setActiveNumber(6);
              }}
              className={
                activeNumber === 6
                  ? "littleAccordion-header"
                  : "littleAccordion-headerNone"
              }
            >
              <p className="littleCardNumber">06</p>
              <p className="littleHeaderTitle">
                Network Design & Implementation
              </p>
            </div>
            <div
              className={
                activeNumber === 6
                  ? "littleAccordion-content-on"
                  : "littleAccordion-content"
              }
            >
              <div
                className={
                  activeNumber === 6 ? "littleAboutCard" : "littleAboutCardNone"
                }
              >
                <a
                  href="https://www.linkedin.com/in/andrew-kirichenko/"
                  className="littleAboutButton"
                >
                  More information
                </a>
                <p>13.03.2023</p>
                <h3>Network Design & Implementation</h3>
              </div>
              <img
                className="littlecardImg"
                src="https://proprikol.ru/wp-content/uploads/2021/01/kartinki-schastlivyh-lyudej-33.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="oneLittleAccordion">
            <div
              onClick={() => {
                setActiveNumber(7);
              }}
              className={
                activeNumber === 7
                  ? "littleAccordion-header"
                  : "littleAccordion-headerNone"
              }
            >
              <p className="littleCardNumber">07</p>
              <p className="littleHeaderTitle">System Design & Engineering</p>
            </div>
            <div
              className={
                activeNumber === 7
                  ? "littleAccordion-content-on"
                  : "littleAccordion-content"
              }
            >
              <div
                className={
                  activeNumber === 7 ? "littleAboutCard" : "littleAboutCardNone"
                }
              >
                <a
                  href="https://www.linkedin.com/in/andrew-kirichenko/"
                  className="littleAboutButton"
                >
                  More information
                </a>
                <p>13.03.2023</p>
                <h3>System Design & Engineering</h3>
              </div>
              <img
                className="littlecardImg"
                src="https://proprikol.ru/wp-content/uploads/2021/01/kartinki-schastlivyh-lyudej-33.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="oneLittleAccordion">
            <div
              onClick={() => {
                setActiveNumber(8);
              }}
              className={
                activeNumber === 8
                  ? "littleAccordion-header"
                  : "littleAccordion-headerNone"
              }
            >
              <p className="littleCardNumber">08</p>
              <p className="littleHeaderTitle"> Client Care Plans</p>
            </div>
            <div
              className={
                activeNumber === 8
                  ? "littleAccordion-content-on"
                  : "littleAccordion-content"
              }
            >
              <div
                className={
                  activeNumber === 8 ? "littleAboutCard" : "littleAboutCardNone"
                }
              >
                <a
                  href="https://www.linkedin.com/in/andrew-kirichenko/"
                  className="littleAboutButton"
                >
                  More information
                </a>
                <p>13.03.2023</p>
                <h3> Client Care Plans</h3>
              </div>
              <img
                className="littlecardImg"
                src="https://proprikol.ru/wp-content/uploads/2021/01/kartinki-schastlivyh-lyudej-33.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
