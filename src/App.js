import React, { useState, useEffect, useLayoutEffect } from "react";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { ReactComponent as ArrowUpward } from "./assets/icons/upward-arrow-bold.svg";
import { ReactComponent as MessageIcon } from "./assets/icons/message.svg";
import MyRouts from "./Routers/routes";
import runAxiosSetup from "./axios";
import { BrowserRouter } from "react-router-dom";

function App() {
  const { loggedinUser } = useSelector((state) => state.auth);
  const token = loggedinUser?.data?.token;
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useLayoutEffect(() => {
    runAxiosSetup({ token });
  }, [token]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <MyRouts />
      </BrowserRouter>

      {isVisible && (
        <>
          <div className="contact_us_Cta contact_fixed d-flex align-items-center justify-content-end">
            <Button className="contact_cta d-flex align-items-center me-5">
              <span className="me-2">
                <MessageIcon />
              </span>
              Contact US
            </Button>
          </div>

          <button className="scrollToTopBtn" onClick={scrollToTop}>
            <ArrowUpward />
          </button>
        </>
      )}
    </div>
  );
}

export default App;
