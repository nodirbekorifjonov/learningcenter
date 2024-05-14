import React from "react";
// styles
import "./style.css";

const TestDemoText = () => {
  return (
    <div className="scrolling-text-container">
      <div
        className="scrolling-text-inner"
        style={{ "--marquee-speed": "20s", "--direction": "scroll-left" }}
        role="marquee"
      >
        <div className="scrolling-text">
          <div className="scrolling-text-item">
            Sayt test rejimda ishlamoqda!
          </div>
          <div className="scrolling-text-item">
            Sayt test rejimda ishlamoqda!
          </div>
          <div className="scrolling-text-item">
            Sayt test rejimda ishlamoqda!
          </div>
          <div className="scrolling-text-item">
            Sayt test rejimda ishlamoqda!
          </div>
        </div>
        <div className="scrolling-text">
          <div className="scrolling-text-item">
            Sayt test rejimda ishlamoqda!
          </div>
          <div className="scrolling-text-item">
            Sayt test rejimda ishlamoqda!
          </div>
          <div className="scrolling-text-item">
            Sayt test rejimda ishlamoqda!
          </div>
          <div className="scrolling-text-item">
            Sayt test rejimda ishlamoqda!
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestDemoText;
