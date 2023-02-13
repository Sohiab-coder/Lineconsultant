import React from "react";
import { useState } from "react";
import "./CheckOut.css";
import { Country, State } from "country-state-city";
import { Link, useNavigate } from "react-router-dom";
import { shippingInfo } from "../../Redex/Actions/cartAction";
import { useDispatch, useSelector } from "react-redux";

const CheckOut = () => {
  const { shippingInfo: localShipping } = useSelector((state) => state.cart);
  const [name, setName] = useState(localShipping.name);
  const [lastName, setLastName] = useState(localShipping.lastName);
  const [country, setCountry] = useState(localShipping.country);
  const [state, setState] = useState(localShipping.state);
  const [streetAdress, setStreetAdress] = useState(localShipping.streetAdress);
  const [city, setCity] = useState(localShipping.city);
  const [postcode, setPostCode] = useState(localShipping.postcode);
  const [phone, setPhone] = useState(localShipping.phone);
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      shippingInfo({
        name,
        lastName,
        country,
        state,
        streetAdress,
        city,
        postcode,
        phone,
      })
    );
    navigate("/confirm/order")
  };

  return (
    <section className="check-out">
      <div className="banner">
        <div className="about-text">
          <h1>Contact</h1>
        </div>
      </div>
      <div className="check-out-container">
        <div className="check-out-place">
          <div className="check-out-heading">
            <h3>Billing details</h3>
          </div>
          <form onSubmit={submitHandler}>
            <div className="form-flex">
              <label>Name</label>
              <input
                className="form-input"
                type="text"
                value={name}
                placeholder="Enter Name"
                required
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-flex">
              <label>Last Name</label>
              <input
                className="form-input"
                type="text"
                placeholder="Enter Last Name"
                value={lastName}
                required
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="form-flex">
              <label>Country / Region</label>

              <select
                className="form-input"
                value={country}
                required
                onChange={(e) => setCountry(e.target.value)}
              >
                <option value="">Country</option>
                {Country &&
                  Country.getAllCountries().map((i) => (
                    <option value={i.isoCode} key={i.isoCode}>
                      {i.name}
                    </option>
                  ))}
              </select>
            </div>

            {country && (
              <div className="form-flex">
                <label>State</label>
                <select
                  className="form-input"
                  required
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                >
                  <option value="">State</option>
                  {State &&
                    State.getStatesOfCountry(country).map((i) => (
                      <option value={i.isoCode} key={i.isoCode}>
                        {i.name}
                      </option>
                    ))}
                </select>
              </div>
            )}
            <div className="form-flex">
              <label>Town / City</label>
              <input
                className="form-input"
                type="text"
                placeholder="Enter Town / City"
                value={city}
                required
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
            <div className="form-flex">
              <label>Street address</label>
              <input
                className="form-input"
                type="text"
                placeholder="House number and street name"
                required
                value={streetAdress}
                onChange={(e) => setStreetAdress(e.target.value)}
              />
            </div>
            <div className="form-flex">
              <label>Postcode / ZIP</label>
              <input
                className="form-input"
                type="number"
                placeholder="Enter Code"
                required
                value={postcode}
                onChange={(e) => setPostCode(e.target.value)}
              />
            </div>
            <div className="form-flex">
              <label>Phone</label>
              <input
                className="form-input"
                type="number"
                placeholder="Enter Phone Number"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="order-main-btn-section">
              <div className="oder-policy">
                <span>
                  Please note that the transaction description on your card will
                  be infrontwebworkers.com <br />
                  Your personal data will be used to process your order, support
                  your experience throughout this website, <br /> and for other
                  <Link to={"/privacy-policy"}>privacy policy</Link>
                </span>
              </div>
              <div className="conditions">
                <input required className="check-box" type="checkbox" />
                <span>I have read and agree to the website </span>
                <Link to={"terms-and-conditions"}>terms and conditions</Link>
              </div>
              <button id="order-main-btn" type="submit">
                Place Order
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CheckOut;
