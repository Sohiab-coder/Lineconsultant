import React from "react";
import { IoLogoWhatsapp } from "react-icons/io";
import { Link } from "react-router-dom";
import "./Shop.css";

const Shop = () => {
  const card = [
    {
      name: "Basic Level Seo package",
      price: `$99.99`,
      _id: "basic-level-seo-package",
      img: "/images/traditional-to-enterprise-seo-6229f8159834d-sej-300x300.png",
    },
    {
      name: "Ecommmerce Seo package",
      img: "/images/seo-idea-lightbulbs-ss-1920-300x300.jpg",
      price: `$199.99`,
      _id: "ecommerce-seo-package",
    },
    {
      name: "Starter Level Seo package",
      img: "images/search-engine-optimization-services-300x300.jpg",
      price: `$299.99`,
      _id: "starter-level-seo-package",
    },
    {
      name: "Plus Level Seo package",
      img: "/images/Best-SEO-Agencies-300x300.jpg",
      price: `$399.99`,
      _id: "plus-level-seo-package",
    },
    {
      name: "Pro Level Seo package",
      img: "images/seo-concept-1024x683-1-300x300.jpg",
      price: `$499.99`,
      _id: "pro-level-seo-package",
    },
  ];

  return (
    <section className="shop-page">
      <div className="main-shop">
        <div className="shop-items">
          <div className="shop-text">
            <p> Showing all {card.length} results</p>
          </div>
          <div className="shop-cart">
            {card &&
              card.map((item) => (
                <Cart
                  key={item._id}
                  id={item._id}
                  name={item.name}
                  price={item.price}
                  img={item.img}
                />
              ))}
          </div>
        </div>
      </div>
      <div className="whats-app">
        <a href="tel:+8183924439">
          <IoLogoWhatsapp />
          <span>+8183924439</span>
        </a>
      </div>
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
