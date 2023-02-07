import React from "react";
import { Link } from "react-router-dom";
import "./About.css";
import CenterAbout from "../../components/CenterAbout/CenterAbout";
import ButtomAbout from "../../components/ButtomAbout/ButtomAbout";
import { IoLogoWhatsapp } from "react-icons/io";

const About = () => {
  return (
    <section className="about">
      <div className="banner">
        <div className="about-text">
          <h1>About</h1>
          <Link to={"/"}>Home</Link>
          <span>/</span>
          <span>About</span>
        </div>
      </div>
      <div className="top-about">
        <div className="content">
          <div className="left-content">
            <div className="left-heading">
              <h2>
                We provide <br /> best SEO service{" "}
              </h2>
              <span className="line"></span>
            </div>
            <div className="left-text-about">
              <div className="left-text-top-about">
                <p>
                  We are the best marketing agency brings you over years of
                  marketing expertise. Our team has a real understanding of
                  clients objectives and unrestrained creative thinking. Our
                  success has been built on the foundation of creative design,
                  innovation and integration. Let us help you increase marketing
                  and SEO reach to stand above from all
                </p>
              </div>
              <div className="left-text-top-about">
                <p>
                  Our experience tells us that by doing our homework, targeting
                  and defining the correct audience and creating relevant
                  engaging content, we can achieve the right results and ROI for
                  our clients. Our proven methodology is used by some of the
                  biggest corporations in the world. It helps us to
                  strategically build your brand and message, making it stand
                  out from the crowd.{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="right-content">
            <div className="about-top-img">
              <img src="/images/info-1.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <CenterAbout />
      <ButtomAbout />
      <div className="whats-app">
        <a href="tel:+8183924439">
          <IoLogoWhatsapp />
          <span>+8183924439</span>
        </a>
      </div>
    </section>
  );
};

export default About;
