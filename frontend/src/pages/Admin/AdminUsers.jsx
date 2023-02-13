import React, { useEffect } from "react";
import DashboardBar from "./DashboardBar";
import { useDispatch, useSelector } from "react-redux";
import { deleteUserAdmin, getAllUsers } from "../../Redex/Actions/userAction";
import RestoreFromTrashIcon from "@mui/icons-material/RestoreFromTrash";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";

const AdminUsers = () => {
  const dispatch = useDispatch();
  const { alluser, message, error } = useSelector((state) => state.user);

  const deleteHandle = async (id) => {
    await dispatch(deleteUserAdmin(id));
    dispatch(getAllUsers());
  };

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

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
    <section className="dashboard">
      <div className="left-admin-user-dashboard">
        <section className="tableClass">
          <main>
            <table>
              <thead>
                <tr>
                  <th>User Id</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Delete</th>
                </tr>
              </thead>

              <tbody>
                {alluser &&
                  alluser.map((i) => (
                    <tr key={i._id}>
                      <td>
                        <Link to={`/user/${i._id}`}>{i._id}</Link>
                      </td>
                      <td>{i.name}</td>
                      <td>{i.email}</td>
                      <td>{i.role}</td>
                      <td
                        className="delete"
                        onClick={() => deleteHandle(i._id)}
                      >
                        <RestoreFromTrashIcon />
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </main>
        </section>
      </div>
      <div className="right-admin-user-dashboard">
        <DashboardBar />
      </div>
    </section>
  );
};

export default AdminUsers;
