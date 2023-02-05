import React from "react";
import "./Home4.css";

const Home4 = () => {
  return (
    <section className="home4">
      <div className="home-4-container">
        <div className="home-4-top">
          <div className="home-4-heading">
            <h3>Our Growth</h3>
            <h2>
              Our <span>achievement</span>{" "}
            </h2>
          </div>
        </div>
        <div className="home-4-center">
          <div className="home-4-center-items">
            <div className="home-4-item">
              <div className="home-4-box">
                <p className="before">On Board</p>
                <div className="bome-4-box-buttom-heading">
                  <h3>Objective</h3>
                  <p>
                    Our objective is to provide top quality, one of a kind 360°
                    digital marketing and branding solutions
                  </p>
                </div>
              </div>
              <div className="home-4-box">
                <p className="before">Monitor</p>
                <div className="bome-4-box-buttom-heading">
                  <h3>Monitoring</h3>
                  <p>
                    We offers varied digital marketing services and give the
                    best solutions from our side
                  </p>
                </div>
              </div>
              <div className="home-4-box">
                <p className="before">Solution</p>
                <div className="bome-4-box-buttom-heading">
                  <h3>Success</h3>
                  <p>
                    Get benefit from our expert in digital marketing and
                    branding strategy to experience the difference that we
                    create
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className="home-4-img" src="https://redpondinc.com/wp-content/uploads/2019/03/achievement_right_shape.png" alt="" />
    </section>
  );
};

export default Home4;
