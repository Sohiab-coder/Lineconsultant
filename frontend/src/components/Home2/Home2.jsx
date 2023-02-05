import React from "react";
import { Link } from "react-router-dom";
import "./Home2.css";
import { AiOutlinePlusCircle } from "react-icons/ai";

const Home2 = () => {
  return (
    <section className="home2">
      <div className="home-2-heading">
        <h2>
          Increase organic{" "}
          <span style={{ color: "#0026ff" }}>website traffic </span> <br />
          and enhance your business web presence{" "}
        </h2>
      </div>
      <div className="cards">
        <div className="items bg1">
          <div className="icon-img">
            <img src="/images/info_box_icon_1.png" alt="" />
          </div>
          <div className="title">
            <h4>Marketing & Advertising</h4>
          </div>
          <div className="home2-text">
            <p>
              We are a leading advertising company with professional team of
              Advertising PR and Digital Marketing and Design Experts.
            </p>
          </div>
          <div className="plus-btn">
            <Link to={"/"}>
              <AiOutlinePlusCircle />{" "}
            </Link>
          </div>
        </div>
        <div className="items bg2">
          <div className="icon-img">
            <img src="/images/info_box_icon_2.png" alt="" />
          </div>
          <div className="title">
            <h4>Search Engine Optimization</h4>
          </div>
          <div className="home2-text">
            <p>
              Looking for first page ranking on Google? Work with us as we are
              the best SEO agency . We provide SEO services to over hundreds of
              clients .
            </p>
          </div>
          <div className="plus-btn">
            <Link to={"/"}>
              <AiOutlinePlusCircle />{" "}
            </Link>
          </div>
        </div>
        <div className="items bg3">
          <div className="icon-img">
            <img src="/images/info_box_icon_3-1.png" alt="" srcset="" />
          </div>
          <div className="title">
            <h4>Branding & Creative Design</h4>
          </div>
          <div className="home2-text">
            <p>
              We are the top design agency for creating logo designing services,
              brochure, packaging and graphic design for clients
            </p>
          </div>
          <div className="plus-btn">
            <Link to={"/"}>
              <AiOutlinePlusCircle />{" "}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home2;
