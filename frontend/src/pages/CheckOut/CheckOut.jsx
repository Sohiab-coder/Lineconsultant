import React, { useEffect } from "react";
import { useState } from "react";
import "./CheckOut.css";
import { Country, State } from "country-state-city";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { orderForm } from "../../Redex/userAction";
import { toast } from "react-hot-toast";
import Loader from "../../components/Loader/Loader";

const CheckOut = () => {
  const dispatch = useDispatch();
  const { subTotal } = useSelector((state) => state.cart);
  const { loading, message, error } = useSelector((state) => state.user);
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [streetAdress, setStreetAdress] = useState("");
  const [city, setCity] = useState("");
  const [postcode, setPostCode] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [prodName, setProdName] = useState("");
  const [prodQty, setProdQty] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      orderForm(
        name,
        lastName,
        companyName,
        country,
        state,
        streetAdress,
        city,
        postcode,
        phone,
        email,
        prodQty,
        prodName,
        subTotal
      )
    );
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: "clearError" });
    }
    if (message) {
      toast.success(message);
      dispatch({ type: "clearMessage" });
    }
  }, [dispatch, error, message]);

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
          {loading ? (
            <Loader />
          ) : (
            <>
              <form
                onSubmit={submitHandler}
                action="https://formspree.io/f/mrgvpgpo"
                method="POST"
              >
                <div className="form-flex">
                  <label>Name</label>
                  <input
                    name="name"
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
                    name="last name"
                    className="form-input"
                    type="text"
                    placeholder="Enter Last Name"
                    value={lastName}
                    required
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
                <div className="form-flex">
                  <label>Company name (optional)</label>
                  <input
                    name="Company name"
                    className="form-input"
                    type="text"
                    placeholder="Enter Company Name"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                  />
                </div>
                <div className="form-flex">
                  <label>Country / Region</label>

                  <select
                    name="country"
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
                      name="state"
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
                    name="city"
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
                    name="address"
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
                    name="zip code"
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
                    name="phone"
                    className="form-input"
                    type="number"
                    placeholder="Enter Phone Number"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <div className="form-flex">
                  <label>Email</label>
                  <input
                    name="email"
                    className="form-input"
                    type="email"
                    placeholder="Enter Email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-flex">
                  <label>Products Name</label>
                  <input
                    name="product name"
                    className="form-input"
                    type="text"
                    placeholder="Please Enter Products Name"
                    required
                    value={prodName}
                    onChange={(e) => setProdName(e.target.value)}
                  />
                </div>
                <div className="form-flex">
                  <label>Products Quantity</label>
                  <input
                    name="product quantity"
                    className="form-input"
                    type="number"
                    placeholder="Enter Products Quantity"
                    required
                    value={prodQty}
                    onChange={(e) => setProdQty(e.target.value)}
                  />
                </div>
                <div className="order-bottum">
                  <div className="oder-policy">
                    <span>
                      Please note that the transaction description on your card
                      will be infrontwebworkers.com <br />
                      Your personal data will be used to process your order,
                      support your experience throughout this website, <br />{" "}
                      and for other
                      <Link to={"/privacy-policy"}>privacy policy</Link>
                    </span>
                  </div>
                  <div className="conditions">
                    <input required className="check-box" type="checkbox" />
                    <span>I have read and agree to the website </span>
                    <Link to={"terms-and-conditions"}>
                      terms and conditions
                    </Link>
                  </div>
                  <button type="submit">Place Order</button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default CheckOut;
