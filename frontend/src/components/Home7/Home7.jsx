import React from "react";
import { Link } from "react-router-dom";
import "./Home7.css";

const Home7 = () => {
  return (
    <section className="home-7">
      <div className="home-7-container">
        <div className="home-7-flex">
          <div className="home-7-left">
            <div className="home-left-heading">
              <h3>Boosting</h3>
              <h2>
                Outstanding <br />{" "}
                <span style={{ color: "#0026ff" }}>Digital</span> Experience
              </h2>
            </div>
            <div className="home-7-items">
              <div className="home-7-item">
                <div className="home-7-top-item">
                  <Home7Card
                    img={"/images/feature_icon_1-1.png"}
                    text={"Reports and progress"}
                  />
                  <Home7Card
                    img={"/images/feature_icon_2-1.png"}
                    text={"Link building and connectivity"}
                  />
                </div>
                <div className="home-7-bottom-item">
                  <Home7Card
                    img={"/images/feature_icon_3-1.png"}
                    text={"Search and stand above all"}
                  />
                  <Home7Card
                    img={"/images/feature_icon_4-1.png"}
                    text={"Website design and development"}
                  />
                </div>
              </div>
            </div>
            <div className="home-7-btn">
              <Link to={"/shop"}>Get Started</Link>
            </div>
          </div>
          <div className="home-7-right">
            <div className="home-7-main-img">
              <img src="/images/macbook_mockup-1.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home7;

function Home7Card({ img, text }) {
  return (
    <div className="home-7-box">
      <div className="home-7-box-img">
        <img src={img} alt="" />
      </div>
      <div className="home-7-box-text">
        <p>{text}</p>
      </div>
    </div>
  );
}
