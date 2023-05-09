import React from "react";
import "./style.scss";
import hand from "../../../images/hand.png";
import girl from "../../../images/girl.png";
import CallToAction from "../../shared/CallToAction";

const IntroContent = () => {
  return (
    <div className="intro-content">
      <div className="layout">
        <div className="left-col">
          <h1 className="tittle">
            <span className="small-text">
              <span className="text">Hellow</span>
              <span className="icon">
                <img src={hand} alt="" />
              </span>
              <span className="text">, I Am</span>
            </span>
            <span className="big-text">Tarunendra Patel</span>
          </h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500
          </p>
          <CallToAction />
        </div>
        <div className="right-col">
          <img src={girl} alt="my pic" />
        </div>
      </div>
    </div>
  );
};

export default IntroContent;
