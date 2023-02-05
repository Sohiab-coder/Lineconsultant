import React from "react";
import { Link } from "react-router-dom";
import "./ButtomAbout.css";

const ButtomAbout = () => {
  return (
    <section className="buttomabout">
      <div className="buttom-container">
        <div className="buttom-left">
          <div className="buttom-heading">
            <h2>Our mission</h2>
            <span className="line"></span>
          </div>
          <div className="buttom-text-about">
            <div className="buttom-about-buttom-text">
              <p>
                Our mission is to enhance your brand presence online by helping
                you attract new prospects and increase website traffic, generate
                more leads, grow sales and turn customers into promoters of your
                brand. Our team of SEO experts provides our clients with
                unparalleled results in SEO (organic search), LSO (local search
                optimization), PPC (paid search), SMM (social media marketing),
                Inbound Marketing, Content Marketing, Conversion Optimization,
                Web Design solutions.
              </p>
            </div>
          </div>
          <div className="buttom-about-btn">
            <div className="btn-link">
              <Link to={"/shop"}>
                <span className="buttom-btn-text">Get Our Service</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="buttom-right">
          <div className="buttom-img">
            <img src="/images/info-2.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ButtomAbout;
