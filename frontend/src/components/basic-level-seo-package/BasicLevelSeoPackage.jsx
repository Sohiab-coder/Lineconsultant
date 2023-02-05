import React, { useState } from "react";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";

const BasicLevelSeoPackage = () => {
  const [count, setCount] = useState(1);
  const single = {
    name: "Basic Level Seo package",
    imgSrc:
      "/images/traditional-to-enterprise-seo-6229f8159834d-sej-600x315.png",
    price: "99.99",
    qty: count,
    id: "1",
  };

  const { name, imgSrc, price, qty, id } = single;

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    if (count <= 1) {
      return;
    }
    setCount(count - 1);
  };

  const dispatch = useDispatch();
  const addToCard = (options) => {
    dispatch({ type: "addToCart", payload: options });
    toast.success("Add To Cart")
    dispatch({type:"totalPrice"})
  };

  return (
    <div className="single-product-container">
      <div className="single-product-top">
        <div className="single-product-top-left">
          <div className="single-product-img">
            <img src={imgSrc} alt="" />
          </div>
        </div>
        <div className="single-product-top-right">
          <div className="single-product-heading">
            <h1>{name}</h1>
          </div>
          <div className="single-product-price">
            <p>${price}</p>
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
              <input type="number" readOnly value={qty} />
              <button onClick={increment}>+</button>
            </div>
          </div>
          <div className="cart-btn">
            <button onClick={() => addToCard({ name, imgSrc, price, qty, id })}>
              Add To Card
            </button>
          </div>
        </div>
      </div>
      <div className="single-product-buttom">
        <div className="single-product-buttom-heading">
          <h1>Description</h1>
          <h4 className="single-product-buttom-title">
            What is Basic Level SEO?
          </h4>
          <p className="single-product-buttom-para">
            Many local buyers are turning to the Internet to find the local
            businesses around them. This is also true of those traveling. Basic
            Level SEO aims to connect local web users with the businesses around
            them by allowing them to be found through a number of different
            channels which produce local search results. The SEO component
            focuses on optimizing different listings and the company’s web
            presence for local search results.
          </p>
          <h4 className="single-product-buttom-title">Why Choose Local?</h4>
          <p className="single-product-buttom-para">
            If you’re a business that does business at a physical location with
            walk-in customers, Basic Level SEO services are a perfect fit. Even
            for businesses that do delivery or on-site service calls can benefit
            from a local campaign to ensure that those in their delivery or
            service area are able to find them. Basic Level SEO focuses on the
            local component of search to bring more potential customers to the
            door.
          </p>
          <h4 className="single-product-buttom-title">Why Choose Local?</h4>
          <p className="single-product-buttom-para">
            In general SEO services can take 3-6 months before you begin to see
            results. A lot of this is due to the nature of SEO in general.
            Search engine optimization focuses on implementing a number of
            different efforts to influence search engines to value a particular
            page over others when someone is performing a search. Search engines
            are against publishing the exact details of their algorithms to
            prevent bad actors from manipulating search results, but our Basic
            Level SEO experts have performed arduous research to better
            understand which efforts help and which don’t.
          </p>
          <p className="single-product-buttom-para">
            At the end of the day, the time to results is going to depend on how
            competitive your industry and market are and the different
            technological hurdles that will need to be overcome. Our Basic Level
            SEO advisors will be able to help provide a more in-depth look at
            your market and the expectations you can expect.
          </p>
          <h4 className="single-product-buttom-title">How Can You Help?</h4>
          <p className="single-product-buttom-para">
            Our Basic Level SEO experts bring a lot to the table when it comes
            to optimizing for local audiences. At the start of a campaign a
            thorough analysis is performed both of the website of the business
            and of any local listings they may have. Research is also conducted
            on local resources and directories that buyers in the area would use
            to find the businesses around them. During this time, a keyword
            strategy is put in place based on knowledge of the market and of the
            state of the industry as a whole.
          </p>
          <p className="single-product-buttom-para">
            On page and off page strategies are put into place to help improve
            search performance while directory listings are optimized. Our Basic
            Level SEO experts will work to help implement change to ensure
            customer reviews are obtained in different platforms to increase the
            confidence search engines have in recommending a particular business
            over another.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BasicLevelSeoPackage;
