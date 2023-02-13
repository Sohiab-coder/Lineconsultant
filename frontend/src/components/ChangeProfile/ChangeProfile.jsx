import React, { useEffect, useState } from "react";
import HttpsIcon from "@mui/icons-material/Https";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { changeProfile } from "../../Redex/Actions/profileAction";
import { useNavigate } from "react-router-dom";
import { loadUser } from "../../Redex/Actions/userAction";

const ChangeProfile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const { message, error } = useSelector((state) => state.profile);
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    await dispatch(changeProfile(name, email));
    navigate("/profile");
    dispatch(loadUser());
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
              type="text"
              placeholder="Enter new name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="inputs-div">
            <HttpsIcon />
            <input
              className="inputs"
              type="text"
              placeholder="Enter new email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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

export default ChangeProfile;
