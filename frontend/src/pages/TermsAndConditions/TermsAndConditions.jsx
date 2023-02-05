import React from "react";
import { Link } from "react-router-dom";
import "./TermsAndConditions.css";

const TermsAndConditions = () => {
  return (
    <section className="term-and-condition">
      <div className="banner">
        <div className="about-text">
          <h1>Terms and Conditions </h1>
        </div>
      </div>
      <div className="term-center">
        <div className="term-heading">
          <h2>Terms & Conditions</h2>
        </div>
        <div className="term-top">
          <div className="term-left">
            <div className="term-img">
              <img src="/images/service-summary-1.png" alt="" />
            </div>
          </div>
          <div className="term-right">
            <div className="term-text">
              <p>
                These terms and conditions outline the rules and regulations for
                the use of InFront Web Workers Website.
              </p>
              <p>
                By accessing this website we assume you accept these terms and
                conditions. Do not continue to use InFront Web Workers, if you
                do not agree to take all of the terms and conditions stated on
                this page.
              </p>
              <p>
                {" "}
                All terms refer to the offer, acceptance and consideration of
                payment necessary to undertake the process of our assistance to
                the Client in the most appropriate manner for the express
                purpose of meeting the Client’s needs in respect of provision of
                the Company’s stated services, in accordance with and subject
                to, prevailing law of Netherlands. Any use of the above
                terminology or other words in the singular, plural,
                capitalization and/or he/she or they, are taken as
                interchangeable and therefore as referring to same.
              </p>
            </div>
          </div>
        </div>
        <div className="term-buttom">
          <div className="term-text">
            <h3>
              <strong>Reservation of Rights</strong>
            </h3>
            <p>
              We reserve the right to request that you remove all links or any
              particular link to our Website. You approve to immediately remove
              all links to our Website upon request. We also reserve the right
              to amen these terms and conditions and it’s linking policy at any
              time. By continuously linking to our Website, you agree to be
              bound to and follow these linking terms and conditions.
            </p>
            <h3>
              <strong>iFrames</strong>
            </h3>
            <p>
              Without prior approval and written permission, you may not create
              frames around our Web pages that alter in any way the visual
              presentation or appearance of our Website.
            </p>
            <h3>
              <strong>You must not:</strong>
            </h3>
            <p>Republish material from InFront Web Workers</p>
            <p>Sell, rent or sub-license material from InFront Web Workers</p>
            <p>
              Reproduce, duplicate or copy material from InFront Web Workers
            </p>
            <p>Redistribute content from InFront Web Workers</p>
            <p>
              Parts of this website offer an opportunity for users to post and
              exchange opinions and information in certain areas of the website.{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="info-container">
        <div className="info">
          <div className="info-text">
            <h2>
              Interested To <br /> Get Our Featured Service{" "}
            </h2>
          </div>
          <div className="info-btn">
            <Link to={"/shop"}>Get Started Now</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TermsAndConditions;
