import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import { useRef } from "react";

const Header = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("active");
  };

  return (
    <>
      <header className="header">
        <nav className="navbar">
          <div className="left-nav">
            <div className="logo-text">
              <Link to="/">
                <span>InFront Web Workers</span>
              </Link>
            </div>
          </div>
          <div ref={navRef} className="home-right">
            <div className="right-left">
              <ul>
                <li className="header-close-icon">
                  <AiOutlineClose onClick={showNavbar} />
                </li>
                <li>
                  <Link onClick={showNavbar} to={"/"}>Home</Link>
                </li>
                <li>
                  <Link onClick={showNavbar} to={"/about"}>About</Link>
                </li>
                <li>
                  <Link onClick={showNavbar} to={"/shop"}>Shop</Link>
                </li>
                <li>
                  <Link onClick={showNavbar} to={"/contact"}>Contact</Link>
                </li>
              </ul>
            </div>
            <div className="right-right">
              <div className="contect-info">
                <img src="/images/phone_icon.png" alt="" />
                <a href="tel:(224) 432-8606">(224) 432-8606 </a>
              </div>
              <div className="cart-bth">
                <Link onClick={showNavbar} to={"/cart"}>View Cart</Link>
              </div>
            </div>
          </div>

          <div className="ham-burger">
            <RxHamburgerMenu onClick={showNavbar} />
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
