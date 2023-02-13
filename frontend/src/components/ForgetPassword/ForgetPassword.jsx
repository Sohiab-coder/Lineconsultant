import React, { useEffect, useState } from "react";
import EmailIcon from "@mui/icons-material/Email";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import { forgetPassword } from "../../Redex/Actions/profileAction";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const { message, error } = useSelector((state) => state.profile);

  const forgetHandler = (e) => {
    e.preventDefault();
    dispatch(forgetPassword(email))
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
          <h1>Lineconsultant Forget Password</h1>
        </div>
        <form onSubmit={forgetHandler}>
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
          <div className="login-btn">
            <button type="submit">Send Email</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ForgetPassword;
