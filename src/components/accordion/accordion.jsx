import React, { useState } from "react";

import "./accordion.css";

export const Accordion = () => {
  const [activeNumber, setActiveNumber] = useState(1);
  return (
    <div className="container">
      <h1 className="accordionTitle">all events</h1>
      <div className="accordion">
        <div className="oneAccordion">
          <div
            onClick={() => {
              setActiveNumber(1);
            }}
            className={
              activeNumber === 1 ? "accordionHeader" : "accordionHeaderNone"
            }
          >
            <p className="cardNumber">01 </p>
            <p className="headerTitle">Hawaiian party</p>
          </div>
          <div
            className={
              activeNumber === 1 ? "accordion-content-on" : "accordion-content"
            }
          >
            <div className={activeNumber === 1 ? "aboutCard" : "aboutCardNone"}>
              <a href="https://www.linkedin.com/in/andrew-kirichenko/">
                More information
              </a>
              <p>13.03.2023</p>
              <h3>Hawailian party</h3>
            </div>
            <img
              className="cardImg"
              src="https://proprikol.ru/wp-content/uploads/2021/01/kartinki-schastlivyh-lyudej-33.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="oneAccordion">
          <div
            onClick={() => {
              setActiveNumber(2);
            }}
            className={
              activeNumber === 2 ? "accordionHeader" : "accordionHeaderNone"
            }
          >
            <p className="cardNumber">02 </p>
            <p className="headerTitle">Мafia party</p>
          </div>
          <div
            className={
              activeNumber === 2 ? "accordion-content-on" : "accordion-content"
            }
          >
            <div className={activeNumber === 2 ? "aboutCard" : "aboutCardNone"}>
              <a href="https://www.linkedin.com/in/andrew-kirichenko/">
                More information
              </a>
              <p>13.03.2023</p>
              <h3>Мafia party</h3>
            </div>
            <img
              className="cardImg"
              src="https://proprikol.ru/wp-content/uploads/2021/01/kartinki-schastlivyh-lyudej-33.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="oneAccordion">
          <div
            onClick={() => {
              setActiveNumber(3);
            }}
            className={
              activeNumber === 3 ? "accordionHeader" : "accordionHeaderNone"
            }
          >
            <p className="cardNumber">03 </p>
            <p className="headerTitle">Party</p>
          </div>
          <div
            className={
              activeNumber === 3 ? "accordion-content-on" : "accordion-content"
            }
          >
            <div className={activeNumber === 3 ? "aboutCard" : "aboutCardNone"}>
              <a href="https://www.linkedin.com/in/andrew-kirichenko/">
                More information
              </a>
              <p>13.03.2023</p>
              <h3>Party</h3>
            </div>
            <img
              className="cardImg"
              src="https://proprikol.ru/wp-content/uploads/2021/01/kartinki-schastlivyh-lyudej-33.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="oneAccordion">
          <div
            onClick={() => {
              setActiveNumber(4);
            }}
            className={
              activeNumber === 4 ? "accordionHeader" : "accordionHeaderNone"
            }
          >
            <p className="cardNumber">04 </p>
            <p className="headerTitle">Party on the beach</p>
          </div>
          <div
            className={
              activeNumber === 4 ? "accordion-content-on" : "accordion-content"
            }
          >
            <div className={activeNumber === 4 ? "aboutCard" : "aboutCardNone"}>
              <a href="https://www.linkedin.com/in/andrew-kirichenko/">
                More information
              </a>
              <p>13.03.2023</p>
              <h3>Party on the beach</h3>
            </div>
            <img
              className="cardImg"
              src="https://proprikol.ru/wp-content/uploads/2021/01/kartinki-schastlivyh-lyudej-33.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="oneAccordion">
          <div
            onClick={() => {
              setActiveNumber(5);
            }}
            className={
              activeNumber === 5 ? "accordionHeader" : "accordionHeaderNone"
            }
          >
            <p className="cardNumber">05 </p>
            <p className="headerTitle">Home Security</p>
          </div>
          <div
            className={
              activeNumber === 5 ? "accordion-content-on" : "accordion-content"
            }
          >
            <div className={activeNumber === 5 ? "aboutCard" : "aboutCardNone"}>
              <a href="https://www.linkedin.com/in/andrew-kirichenko/">
                More information
              </a>
              <p>13.03.2023</p>
              <h3>Home Security</h3>
            </div>
            <img
              className="cardImg"
              src="https://proprikol.ru/wp-content/uploads/2021/01/kartinki-schastlivyh-lyudej-33.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="oneAccordion">
          <div
            onClick={() => {
              setActiveNumber(6);
            }}
            className={
              activeNumber === 6 ? "accordionHeader" : "accordionHeaderNone"
            }
          >
            <p className="cardNumber">06 </p>
            <p className="headerTitle">Network Design & Implementation</p>
          </div>
          <div
            className={
              activeNumber === 6 ? "accordion-content-on" : "accordion-content"
            }
          >
            <div className={activeNumber === 6 ? "aboutCard" : "aboutCardNone"}>
              <a href="https://www.linkedin.com/in/andrew-kirichenko/">
                More information
              </a>
              <p>13.03.2023</p>
              <h3>Network Design & Implementation</h3>
            </div>
            <img
              className="cardImg"
              src="https://proprikol.ru/wp-content/uploads/2021/01/kartinki-schastlivyh-lyudej-33.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="oneAccordion">
          <div
            onClick={() => {
              setActiveNumber(7);
            }}
            className={
              activeNumber === 7 ? "accordionHeader" : "accordionHeaderNone"
            }
          >
            <p className="cardNumber">07 </p>
            <p className="headerTitle">System Design & Engineering</p>
          </div>
          <div
            className={
              activeNumber === 7 ? "accordion-content-on" : "accordion-content"
            }
          >
            <div className={activeNumber === 7 ? "aboutCard" : "aboutCardNone"}>
              <a href="https://www.linkedin.com/in/andrew-kirichenko/">
                More information
              </a>
              <p>13.03.2023</p>
              <h3>System Design & Engineering</h3>
            </div>
            <img
              className="cardImg"
              src="https://proprikol.ru/wp-content/uploads/2021/01/kartinki-schastlivyh-lyudej-33.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="oneAccordion">
          <div
            onClick={() => {
              setActiveNumber(8);
            }}
            className={
              activeNumber === 8 ? "accordionHeader" : "accordionHeaderNone"
            }
          >
            <p className="cardNumber">08 </p>
            <p className="headerTitle">Client Care Plans</p>
          </div>
          <div
            className={
              activeNumber === 8 ? "accordion-content-on" : "accordion-content"
            }
          >
            <div className={activeNumber === 8 ? "aboutCard" : "aboutCardNone"}>
              <a href="https://www.linkedin.com/in/andrew-kirichenko/">
                More information
              </a>
              <p>13.03.2023</p>
              <h3>Client Care Plans</h3>
            </div>
            <img
              className="cardImg"
              src="https://proprikol.ru/wp-content/uploads/2021/01/kartinki-schastlivyh-lyudej-33.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};
