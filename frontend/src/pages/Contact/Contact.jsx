import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Contact.css";
import { IoLogoWhatsapp } from "react-icons/io";

const Contact = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <section>
      <div className="banner">
        <div className="about-text">
          <h1>Contact</h1>
        </div>
      </div>
      <div className="contact">
        <div className="contact-top">
          <div className="contact-heading">
            <div className="get-in-touch">
              <h2>Get in Touch</h2>
              <span className="line"></span>
            </div>
          </div>
          <div className="contact-para">
            <p>
              If you face any difficulty regarding any issue feel free to
              contact on given number{" "}
            </p>
          </div>
          <div className="items-3">
            <div className="item">
              <div className="box">
                <div className="space-box"></div>
                <p>
                  4870 Sadler Rd, <br /> Suite 300 Glen Allen, Virginia 23060
                </p>
              </div>
              <div className="box">
                <div className="space-box"></div>
                <a href="callto:+8183924439">+8183924439</a>
              </div>
              <div className="box">
                <div className="space-box"></div>
                <a href="mailto:contact@lineconsultant.com">
                  contact@lineconsultant.com
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-buttom">
          <div className="contact-heading">
            <div className="get-in-touch">
              <h2>Get in Touch</h2>
              <span className="line"></span>
            </div>
          </div>
          <div className="contact-para">
            <p>
              You can fill this form regarding any issue our <br /> support will
              assist you as soon as possible.
            </p>
          </div>
          <form
            className="form"
            onSubmit={submitHandler}
            action="https://formspree.io/f/mrgvpgpo"
            method="POST"
          >
            <div className="contact-inputs">
              <div className="seprat">
                <input
                  name="name"
                  placeholder="Enter Name"
                  required
                  className="contact-input"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  name="lastname"
                  placeholder="Enter Last Name"
                  required
                  className="contact-input"
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <input
                name="email"
                placeholder="Enter Email"
                required
                className="contact-input"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <textarea
                name="message"
                className="contact-input"
                placeholder="Message..."
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                cols="30"
                rows="10"
              ></textarea>
            </div>
            <button className="submit" type="submit">
              Submit
            </button>
          </form>
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
      <div className="whats-app">
        <a href="tel:+8183924439">
          <IoLogoWhatsapp />
          <span>Chat With Us</span>
        </a>
      </div>
    </section>
  );
};

export default Contact;
