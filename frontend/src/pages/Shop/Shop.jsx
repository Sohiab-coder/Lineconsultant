import React, { useEffect } from "react";
import { IoLogoWhatsapp } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Shop.css";
import { getAllProducts } from "../../Redex/Actions/shopAction";
import { toast } from "react-hot-toast";
import Loader from "../../components/Loader/Loader";

const Shop = () => {
  const dispatch = useDispatch();
  const { products, error, loading } = useSelector((state) => state.shop);

  useEffect(() => {
    dispatch(getAllProducts());
    if (error) {
      toast.error(error);
      dispatch({ type: "clearErrors" });
    }
  }, [dispatch, error]);

  return (
    <section className="shop-page">
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="main-shop">
            <div className="shop-items">
              <div className="shop-text">
                <p> Showing all {products && products.length} results</p>
              </div>
              <div className="shop-cart">
                {products &&
                  products.map((item) => (
                    <Cart
                      key={item._id}
                      id={item._id}
                      name={item.name}
                      price={`$${item.price}`}
                      img={item.image.url}
                    />
                  ))}
              </div>
            </div>
          </div>
          <div className="whats-app">
            <a href="tel:+8183924439">
              <IoLogoWhatsapp />
              <span>Chat With Us</span>
            </a>
          </div>
        </>
      )}
    </section>
  );
};

export default Shop;

function Cart({ id, img, name, price }) {
  return (
    <Link to={`/product/${id}`}>
      <div className="main-card">
        <div className="card-img">
          <img src={img} alt={name} />
        </div>
        <h4>{name}</h4>
        <p>{price}</p>
      </div>
    </Link>
  );
}
