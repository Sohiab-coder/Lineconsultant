import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Contact.css";
import { useDispatch, useSelector } from "react-redux";
import { contactForm } from "../../Redex/userAction";
import toast from "react-hot-toast";
import Loader from "../../components/Loader/Loader";

const Contact = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();
  const {
    loading,
    message: contactMessage,
    error,
  } = useSelector((state) => state.user);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(contactForm(name, lastName, email, message));
    setName("");
    setLastName("");
    setEmail("");
    setMessage("");
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: "clearError" });
    }
    if (contactMessage) {
      toast.success(contactMessage);
      dispatch({ type: "clearMessage" });
    }
  }, [dispatch, error, contactMessage]);

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
                  1008 James St <br /> Monongahela, PA 15063
                </p>
              </div>
              <div className="box">
                <div className="space-box"></div>
                <a href="callto:88888888">(833) 399-3054</a>
              </div>
              <div className="box">
                <div className="space-box"></div>
                <a href="mailto:support@infrontwebworkers.com">
                  support@infrontwebworkers.com
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
          {loading ? (
            <Loader />
          ) : (
            <form className="form" onSubmit={submitHandler}>
              <div className="contact-inputs">
                <div className="seprat">
                  <input
                    placeholder="Enter Name"
                    required
                    className="contact-input"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <input
                    placeholder="Enter Last Name"
                    required
                    className="contact-input"
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
                <input
                  placeholder="Enter Email"
                  required
                  className="contact-input"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <textarea
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
          )}
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

export default Contact;
