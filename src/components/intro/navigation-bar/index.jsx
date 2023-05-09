import React from "react";
import CallToAction from "../../shared/CallToAction";
import "./style.scss";
const Navigation = () => {
  return (
    <div className="top-navigation-bar">
      <div className="app-logo">
        <h3>Tarunendra</h3>
      </div>
      <div className="navigation">
        <span className="navigation-item">Skills</span>
        <span className="navigation-item">Portfolio</span>
        <span className="navigation-item">Blogs & Articles</span>
        <CallToAction text="Contact me" />
      </div>
    </div>
  );
};

export default Navigation;
