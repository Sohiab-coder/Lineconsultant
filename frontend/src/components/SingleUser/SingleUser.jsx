import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { singleUserAdmin } from "../../Redex/Actions/userAction";

const SingleUser = () => {
  const { singleUser } = useSelector((state) => state.user);
  const params = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(singleUserAdmin(params.id));
  }, [dispatch, params.id]);

  return (
    <section className="profile">
      <div className="profile-container">
        <div className="left-profile">
          <div className="profile-img">
            <img src={singleUser && singleUser.avatar.url} alt="" />
          </div>
        </div>
        <div className="right-profile">
          <div>
            <b>Name</b>: <span>{singleUser && singleUser.name}</span>
          </div>
          <div>
            <b>Email</b>: <span>{singleUser && singleUser.email}</span>
          </div>
          <div>
            <b>CreatedAt</b>:{" "}
            <span>
              {singleUser && singleUser.createdAt.toString().split("T")[0]}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleUser;
