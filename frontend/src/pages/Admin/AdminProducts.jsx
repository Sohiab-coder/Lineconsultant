import React, { useEffect } from "react";
import DashboardBar from "./DashboardBar";
import { useDispatch, useSelector } from "react-redux";
import RestoreFromTrashIcon from "@mui/icons-material/RestoreFromTrash";
import { Link } from "react-router-dom";
import { getAllProducts } from "../../Redex/Actions/shopAction";
import { deleteProductAdmin } from "../../Redex/Actions/ProductAction";
import { toast } from "react-hot-toast";
import { loadUser } from "../../Redex/Actions/userAction";

const AdminProducts = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.shop);
  const { message, error } = useSelector(
    (state) => state.adminProduct
  );

  const deleteHandle = async (id) => {
    await dispatch(deleteProductAdmin(id));
    dispatch(loadUser());
  };

  useEffect(() => {
    dispatch(getAllProducts());
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
                  <th>Product Image</th>
                  <th>Name</th>
                  <th>price</th>
                  <th>Category</th>
                  <th>Delete</th>
                </tr>
              </thead>

              <tbody>
                {products &&
                  products.map((i) => (
                    <tr key={i._id}>
                      <td>
                        <Link to={`/product/${i._id}`}>{i._id}</Link>
                      </td>
                      <td>{i.name}</td>
                      <td>{`$${i.price}`}</td>
                      <td>{i.category}</td>
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

export default AdminProducts;
