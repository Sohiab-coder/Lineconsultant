import React, { useState } from "react";
import HttpsIcon from "@mui/icons-material/Https";
import LockClockIcon from "@mui/icons-material/LockClock";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { resetPassword } from "../../Redex/Actions/profileAction";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const params = useParams();
  const dispatch = useDispatch();

  const resetHandler = (e) => {
    e.preventDefault();
    dispatch(resetPassword(params.token, password, confirmPassword));
  };

  return (
    <section className="main-form">
      <div className="my-form">
        <div className="form-heading">
          <h1>Lineconsultant Reset Password</h1>
        </div>
        <form onSubmit={resetHandler}>
          <div className="inputs-div">
            <HttpsIcon />
            <input
              className="inputs"
              type="password"
              required
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="inputs-div">
            <LockClockIcon />
            <input
              className="inputs"
              type="password"
              required
              placeholder="Enter confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <div className="login-btn">
            <button type="submit">Reset</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ResetPassword;
