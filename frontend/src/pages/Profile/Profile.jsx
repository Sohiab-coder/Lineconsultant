import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Profile.css";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteProfile,
} from "../../Redex/Actions/profileAction";
import { toast } from "react-hot-toast";

const Profile = () => {
  const { user } = useSelector((state) => state.user);
  const { message, error } = useSelector((state) => state.profile);

  const dispatch = useDispatch();

  const deleteHandler = () => {
    dispatch(deleteProfile());
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: "clearErrors" });
    }
    if (message) {
      toast.success(message);
      dispatch({ type: "clearMessages" });
    }
  }, [dispatch, message, error]);

  return (
    <section className="profile">
      <div className="profile-container">
        <div className="left-profile">
          <div className="profile-img">
            <img src={user && user.avatar.url} alt="" />
          </div>
        </div>
        <div className="right-profile">
          <div>
            <b>Name</b>: <span>{user && user.name}</span>
          </div>
          <div>
            <b>Email</b>: <span>{user && user.email}</span>
          </div>
          <div>
            <b>CreatedAt</b>:{" "}
            <span>{user && user.createdAt.toString().split("T")[0]}</span>
          </div>
          <div className="profile-btns">
            <button>
              <Link to={"/change/password"}>Change Password</Link>
            </button>
            <button>
              <Link to={"/change/profile"}>Change Profile</Link>
            </button>
            <button className="delete-btn" onClick={deleteHandler}>
              Delete Account{" "}
              <span>
                <DeleteOutlineOutlinedIcon />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
