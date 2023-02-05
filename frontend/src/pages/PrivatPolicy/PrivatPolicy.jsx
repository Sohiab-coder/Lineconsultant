import React from "react";
import { Link } from "react-router-dom";
import "./privat.css"

const PrivatPolicy = () => {
  return (
    <section className="privat-policy">
      <div className="banner">
        <div className="about-text">
          <h1>Privacy Policy</h1>
        </div>
      </div>
      <div className="privat-center">
        <div className="pravat-heading">
          <h2>InFront Web Workers</h2>
          <p>Privacy Policy</p>
        </div>
        <div className="pravat-img">
          <img src="/images/service-img-2-768x278.png" alt="" />
        </div>
        <div className="pravat-text">
          <p>
            At InFront Web Workers, one of our main priorities is the privacy of
            our visitors. This Privacy Policy document contains types of
            information that is collected and recorded by InFront Web Workers
            Inc and how we use it.
          </p>
          <p>
            If you have additional questions or require more information about
            our Privacy Policy, do not hesitate to contact us.
          </p>
          <p>
            This Privacy Policy applies only to our online activities and is
            valid for visitors to our website with regards to the information
            that they shared and/or collect in InFront Web Workers. This policy
            is not applicable to any information collected offline or via
            channels other than this website.{" "}
          </p>
          <h2>Consent</h2>
          <p>
            By using our website, you hereby consent to our Privacy Policy and
            agree to its terms.
          </p>
          <h2>Information we collect</h2>
          <p>
            The personal information that you are asked to provide, and the
            reasons why you are asked to provide it, will be made clear to you
            at the point we ask you to provide your personal information.
          </p>
          <p>
            If you contact us directly, we may receive additional information
            about you such as your name, email address, phone number, the
            contents of the message and/or attachments you may send us, and any
            other information you may choose to provide.
          </p>
          <p>
            When you register for an Account, we may ask for your contact
            information, including items such as name, company name, address,
            email address, and telephone number.
          </p>
          <h2>How we use your information</h2>
          <p>
            We use the information we collect in various ways, including to:
          </p>
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

export default PrivatPolicy;
