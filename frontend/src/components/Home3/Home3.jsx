import React, { useState } from "react";
import "./Home3.css";

const Home3 = () => {
  const [website, setWebsite] = useState("");
  const [email, setEmail] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <section className="home3">
      <div className="flex">
        <div className="home-3-left">
          <div className="home-3-title">
            <h3>Ready to Grow</h3>
          </div>
          <div className="home-3-heading">
            <h2>
              Boosts your <span style={{ color: "#0026ff" }}>website </span>{" "}
              traffic!
            </h2>
          </div>
          <div className="home-form">
            <form
              onSubmit={submitHandler}
              action="https://formspree.io/f/mrgvpgpo"
              method="POST"
            >
              <div className="home-inputs">
                <input
                  name="websiteurl"
                  className="home-input"
                  type="text"
                  placeholder="Website URL"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                />
                <input
                  name="email"
                  className="home-input"
                  type="email"
                  placeholder="Mail Adress"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <button className="submit-btn" type="submit">
                Check Now
              </button>
            </form>
          </div>
        </div>
        <div className="home-3-right">
          <div className="home-3-img">
            <img src="/images/boosts_mockup.png" alt="" />
          </div>
        </div>
      </div>
      <img
        className="side-img-home-3"
        src="/images/achievement_shape.png"
        alt=""
      />
    </section>
  );
};

export default Home3;
