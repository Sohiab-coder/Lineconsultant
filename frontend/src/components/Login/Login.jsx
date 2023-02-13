import React, { useState } from "react";
import EmailIcon from "@mui/icons-material/Email";
import KeyIcon from "@mui/icons-material/Key";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../Redex/Actions/userAction";
import Loader from "../Loader/Loader";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.user);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <section className="main-form">
      <div className="my-form">
        <div className="form-heading">
          <h1>Lineconsultant Login Form</h1>
        </div>
        {loading ? (
          <Loader />
        ) : (
          <form onSubmit={submitHandler}>
            <div className="inputs-div">
              <EmailIcon />
              <input
                className="inputs"
                type="email"
                required
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="inputs-div">
              <KeyIcon />
              <input
                className="inputs"
                type="password"
                required
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="login-btn">
              <button type="submit">Login</button>
            </div>
            <div className="forget">
              <Link to={"/password/forget"}>Forget Password</Link>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};

export default Login;
