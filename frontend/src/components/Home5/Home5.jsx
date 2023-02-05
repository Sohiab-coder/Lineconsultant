import React from "react";
import "./Home5.css";
import { GoPrimitiveDot } from "react-icons/go";
import { Link } from "react-router-dom";

const Home5 = () => {
  return (
    <section className="home-5">
      <div className="home-5-container">
        <div className="home-5-left">
          <div className="home-5-main-img">
            <img src="/images/left_mokup.png" alt="" />
          </div>
        </div>
        <img className="home-5-side-img" src="/images/feature_1_left_bg_shape-1.png" alt="" />
        <div className="home-5-right">
          <div className="home-5-heading">
            <h3>Success Story</h3>
            <h2>
              Boost your conversion{" "}
              <span style={{ color: "#0026ff" }}>rate</span>{" "}
            </h2>
          </div>
          <div className="home-5-right-center">
            <div className="home-5-items">
              <div className="home-5-item">
                <div className="home-5-box">
                  <div className="dot">
                    <GoPrimitiveDot />
                  </div>
                  <div className="home-5-box-title">
                    <h4>40x</h4>
                  </div>
                  <div className="home-5-box-para">
                    <p>Increase in Search Traffic</p>
                  </div>
                </div>
                <div className="home-5-box">
                  <div className="dot">
                    <GoPrimitiveDot style={{ color: "#fe6f0a" }} />
                  </div>
                  <div className="home-5-box-title">
                    <h4 style={{ color: "#fe6f0a" }}>70x</h4>
                  </div>
                  <div className="home-5-box-para">
                    <p>Increase in Sales</p>
                  </div>
                </div>
                <div className="home-5-box">
                  <div className="dot">
                    <GoPrimitiveDot style={{ color: "#6a4af4" }} />
                  </div>
                  <div className="home-5-box-title">
                    <h4 style={{ color: "#6a4af4" }}>80x</h4>
                  </div>
                  <div className="home-5-box-para">
                    <p>Increase in Pageviews</p>
                  </div>
                </div>
              </div>
              <div className="home-5-btn">
                <Link to={"/contact"}>Get free Consultation</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home5;
