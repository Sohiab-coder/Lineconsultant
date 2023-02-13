import React, { useEffect, useState } from "react";
import HttpsIcon from "@mui/icons-material/Https";
import LockClockIcon from "@mui/icons-material/LockClock";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { changePassword } from "../../Redex/Actions/profileAction";

const ChangePassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const dispatch = useDispatch();
  const { message, error } = useSelector((state) => state.profile);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(changePassword(oldPassword, password, confirmPassword));
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
    <section className="main-form">
      <div className="my-form">
        <div className="form-heading">
          <h1>Lineconsultant Change Password</h1>
        </div>
        <form onSubmit={submitHandler}>
          <div className="inputs-div">
            <HttpsIcon />
            <input
              className="inputs"
              type="password"
              required
              placeholder="Enter Old password"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
            />
          </div>
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
            <button type="submit">Update</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ChangePassword;
