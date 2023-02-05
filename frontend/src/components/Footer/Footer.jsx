import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="top-footer">
          <div className="footer-top-link">
            <div className="footer-icon">
              <img src="/images/massage.png" alt="" />
            </div>
            <div className="footer-contact-link">
              <a href="tel:(224) 432-8606">(224) 432-8606</a>
              <br />
              <br />
              <a href="mailto:tshabbir@venturespoint.com">
                tshabbir@venturespoint.com
              </a>
            </div>
          </div>
        </div>
        <span className="footer-line"></span>
        <div className="buttom-footer">
          <div className="footer-container">
            <div className="footer-items">
              <div className="footer-item">
                <div className="footer-box">
                  <div className="title-footer">
                    <h4>Address</h4>
                  </div>
                  <div className="footer-title-2">
                    <p>1008 James St Monongahela, PA 15063</p>
                    <br />
                    <br />
                    <span>Copyrights By </span>
                    <a href={"#home"}> InFront Web Workers </a>
                    <span>2022</span>
                  </div>
                </div>
                <div className="footer-box">
                  <div className="title-footer">
                    <h4>Quick Links</h4>
                  </div>
                  <div className="footer-ul">
                    <ul>
                      <li>
                        <Link to={"/privacy-policy"}>Privacy Policy</Link>
                      </li>
                      <li>
                        {" "}
                        <Link to={"/refund-policy"}>Refund Policy</Link>
                      </li>
                      <li>
                        <Link to={"/terms-and-conditions"}>
                          Terms & Conditions
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="footer-box">
                  <div className="title-footer">
                    <h4>Menu</h4>
                  </div>
                  <div className="footer-ul">
                    <ul>
                      <li>
                        <Link to={"/"}>Home</Link>
                      </li>
                      <li>
                        <Link to={"/about"}>About</Link>
                      </li>
                      <li>
                        <Link to={"/shop"}>Shop</Link>
                      </li>
                      <li>
                        <Link to={"/contact"}>Contact</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
