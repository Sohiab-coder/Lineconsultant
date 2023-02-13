import React, { useEffect, useState } from "react";
import "./Register.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EmailIcon from "@mui/icons-material/Email";
import HttpsIcon from "@mui/icons-material/Https";
import { Avatar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../Redex/Actions/userAction";
import toast from "react-hot-toast";
import Loader from "../Loader/Loader";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState("");
  const [avatarPreview, setAvatarPreview] = useState("");
  const dispatch = useDispatch();
  const { loading, message, error } = useSelector((state) => state.user);

  const changeImageHandler = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setAvatarPreview(reader.result);
      setAvatar(file);
    };
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.append("name", name);
    myForm.append("email", email);
    myForm.append("password", password);
    myForm.append("file", avatar);
    dispatch(register(myForm));
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
          <h1>Lineconsultant Register Form</h1>
        </div>
        {loading ? (
          <Loader />
        ) : (
          <form onSubmit={submitHandler}>
            <div className="inputs-div">
              <AccountCircleIcon />
              <input
                className="inputs"
                type="text"
                required
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
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
            <div className="avatar">
              <Avatar src={avatarPreview} sx={{ width: 50, height: 50 }} />
              <input
                accept="image/*"
                required
                type={"file"}
                onChange={changeImageHandler}
              />
            </div>
            <div className="login-btn">
              <button type="submit">Register</button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};

export default Register;
