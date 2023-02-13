import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./SingleProduct.css";
import { useParams } from "react-router-dom";
import { getSingleProduct } from "../../Redex/Actions/shopAction";
import { itemAddToCart } from "../../Redex/Actions/cartAction";
import Loader from "../../components/Loader/Loader";
import { toast } from "react-hot-toast";

const SingleProduct = () => {
  const params = useParams();
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const { product, loading } = useSelector((state) => state.shop);

  const increment = () => {
    const qty = quantity + 1;
    setQuantity(qty);
  };
  const decrement = () => {
    if (quantity <= 1) {
      return;
    }
    setQuantity(quantity - 1);
  };

  const addToCart = () => {
    dispatch(itemAddToCart(params.id, quantity));
    toast.success("Item added to cart")
  };

  useEffect(() => {
    dispatch(getSingleProduct(params.id));
  }, [dispatch, params.id]);

  return (
    <section className="single-product">
      {loading ? (
        <Loader />
      ) : (
        <div className="single-product-container">
          <div className="single-product-top">
            <div className="single-product-top-left">
              <div className="single-product-img">
                <img src={product && product.image.url} alt="" />
              </div>
            </div>
            <div className="single-product-top-right">
              <div className="single-product-heading">
                <h1>{product && product.name}</h1>
              </div>
              <div className="single-product-price">
                <p>${product && product.price}</p>
              </div>
              <div className="single-product-short-des">
                <p>
                  Rank Targeting and Tracking for 30 Keywords <br /> Limited but
                  Calculated Technical On-Page Optimization
                </p>
              </div>
              <div className="add-to-card-btns">
                <div className="count-btn">
                  <button onClick={decrement}>-</button>
                  <input type="number" readOnly value={quantity} />
                  <button onClick={increment}>+</button>
                </div>
              </div>
              <div className="cart-btn">
                <button onClick={addToCart}>Add To Card</button>
              </div>
            </div>
          </div>
          <div className="single-product-buttom">
            <div className="single-product-buttom-heading">
              <h1>Description</h1>
              <p className="single-product-buttom-para">
                {product && product.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default SingleProduct;
