import React from "react";
import "./CenterAbout.css";

const CenterAbout = () => {
  return (
    <section className="centerabout">
      <div className="center-heading">
        <h3>Work Flow</h3>
        <h2>Our Working Process</h2>
      </div>
      <div className="icons">
        <Icon img={"/images/1.png"} text={"Planning"} />
        <Icon img={"/images/2.png"} text={"Research"} />
        <Icon img={"/images/3.png"} text={"Optimizing"} />
        <Icon img={"/images/3.png"} text={"Results"} />
      </div>
    </section>
  );
};

export default CenterAbout;

function Icon({ img, text }) {
  return (
    <div className="icon-box">
      <div className="icon-item">
        <img src={img} alt="" />
      </div>
      <h4 className="small">{text}</h4>
    </div>
  );
}
