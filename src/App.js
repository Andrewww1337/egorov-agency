import React, { useState, useRef, useEffect } from "react";
import { Accordion } from "./components/accordion";
import { Footer } from "./components/footer";
import { MainComponent } from "./components/mainComponent";

import "./App.css";
import { LittleAccordion } from "./components/littleAccordion";

function App() {
  const [otherEventsIsOpen, setOtherEventsIsOpen] = useState(false);
  const [windowDimenion, detectHW] = useState({
    winWidth: window.innerWidth,
    winHeight: window.innerHeight,
  });

  const detectSize = () => {
    detectHW({
      winWidth: window.innerWidth,
      winHeight: window.innerHeight,
    });
  };
  useEffect(() => {
    window.addEventListener("resize", detectSize);

    return () => {
      window.removeEventListener("resize", detectSize);
    };
  }, [windowDimenion]);
  const events = useRef(null);
  function scrollToRef(ref) {
    window.scrollTo({
      top: ref?.current?.offsetTop,
      behavior: "smooth",
    });
  }
  useEffect(() => {
    if (otherEventsIsOpen) {
      scrollToRef(events);
      console.log("ref");
    }
  }, [otherEventsIsOpen]);
  return (
    <div className="App">
      <MainComponent windowDimenion={windowDimenion} />
      <Footer
        setOtherEventsIsOpen={setOtherEventsIsOpen}
        otherEventsIsOpen={otherEventsIsOpen}
      />
      <div ref={events} />
      {otherEventsIsOpen &&
        (windowDimenion.winWidth > 1280 ? <Accordion /> : <LittleAccordion />)}
    </div>
  );
}

export default App;
