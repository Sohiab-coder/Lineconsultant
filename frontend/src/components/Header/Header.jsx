import React, { useEffect } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../Redex/Actions/userAction";
import { toast } from "react-hot-toast";

const Header = () => {
  const dispatch = useDispatch();
  const { message, error, isAuthenticated, user } = useSelector(
    (state) => state.user
  );
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("active");
  };

  const logoutHandler = () => {
    dispatch(logout());
    showNavbar();
  };

  useEffect(() => {
    if (message) {
      toast.success(message);
      dispatch({ type: "clearMessages" });
    }
    if (error) {
      toast.error(error);
      dispatch({ type: "clearErrors" });
    }
  }, [dispatch, error, message]);

  return (
    <>
      <header className="header">
        <nav className="navbar">
          <div className="left-nav">
            <Link to="/">
              <img src="/images/logo.png" alt="" />
            </Link>
          </div>
          <div ref={navRef} className="home-right">
            <div className="right-left">
              <ul>
                <li className="header-close-icon">
                  <AiOutlineClose onClick={showNavbar} />
                </li>
                <li>
                  <Link onClick={showNavbar} to="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link onClick={showNavbar} to="/about">
                    About
                  </Link>
                </li>
                <li>
                  <Link onClick={showNavbar} to="/shop">
                    Shop
                  </Link>
                </li>
                <li>
                  <Link onClick={showNavbar} to="/contact">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="right-right">
              <div className="contect-info">
                <img src="/images/phone_icon.png" alt="" />
                <a href="http://wa.me/qr/7COUQGIELTRM1" target={"blank"}>
                  +8183924439{" "}
                </a>
              </div>
              <div className="cart-bth">
                <Link onClick={showNavbar} to={"/cart"}>
                  View Cart
                </Link>
              </div>
              <div className="header-login">
                {isAuthenticated ? (
                  <>
                    <button onClick={showNavbar}>
                      <Link to={"/profile"}>Profile</Link>
                    </button>
                    <button onClick={logoutHandler}>Logout</button>
                  </>
                ) : (
                  <>
                    <button onClick={showNavbar}>
                      <Link to={"/login"}>Login</Link>
                    </button>
                    <button onClick={showNavbar}>
                      <Link to={"/register"}>Sign Up</Link>
                    </button>
                  </>
                )}
                {user && user.role === "admin" && (
                  <button onClick={showNavbar}>
                    <Link to={"/admin/createproduct"}>Dashboard</Link>
                  </button>
                )}
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
