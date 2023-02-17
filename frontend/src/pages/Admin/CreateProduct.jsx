import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DashboardBar from "./DashboardBar";
import "./Dashbord.css";
import { createProduct } from "../../Redex/Actions/ProductAction";
import { toast } from "react-hot-toast";

const CreateProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [imgPreview, setImgPreview] = useState("");
  const [img, setImg] = useState("");
  const dispatch = useDispatch();
  const { error, message } = useSelector((state) => state.adminProduct);

  const changeImageHandler = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setImgPreview(reader.result);
      setImg(file);
    };
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const myForm = new FormData();
    myForm.append("name", name);
    myForm.append("price", price);
    myForm.append("category", category);
    myForm.append("description", description);
    myForm.append("file", img);
    await dispatch(createProduct(myForm));
    toast.success("Product Created");
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
    <section className="dashboard">
      <div className="left-dashboard">
        <div className="product-create-area">
          <form onSubmit={submitHandler} className="create-product-form">
            <div>
              <input
                type="text"
                placeholder="Enter product name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <input
                type="number"
                placeholder="Enter product price"
                required
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Enter product category"
                required
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
            </div>
            <div>
              <textarea
                cols="30"
                rows="10"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
            <div className="product-img">
              <img src={imgPreview} alt="" />
              <input
                accept="image/*"
                required
                type={"file"}
                onChange={changeImageHandler}
              />
            </div>
            <button type="submit">Create</button>
          </form>
          <h2>Description:</h2>
          {description && <p>{description}</p>}
        </div>
      </div>
      <div className="right-dashboard">
        <DashboardBar />
      </div>
    </section>
  );
};

export default CreateProduct;
