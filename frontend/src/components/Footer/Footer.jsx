import React from "react";
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
              <a href="http://wa.me/qr/7COUQGIELTRM1" target={"blank"}>
                +8183924439
              </a>
              <br />
              <br />
              <a href="mailto:tshabbir@venturespoint.com">
                contact@lineconsultant.com
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
                    <p>4870 Sadler Rd, Suite 300 Glen Allen, Virginia 23060</p>
                    <br />
                    <br />
                    <span>Copyrights By </span>
                    <a href={"#home"}> Line Consultant </a>
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
                        <a href={"/privacy-policy"}>Privacy Policy</a>
                      </li>
                      <li>
                        {" "}
                        <a href={"/refund-policy"}>Refund Policy</a>
                      </li>
                      <li>
                        <a href={"/terms-and-conditions"}>Terms & Conditions</a>
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
                        <a href={"/"}>Home</a>
                      </li>
                      <li>
                        <a href={"/about"}>About</a>
                      </li>
                      <li>
                        <a href={"/shop"}>Shop</a>
                      </li>
                      <li>
                        <a href={"/contact"}>Contact</a>
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
