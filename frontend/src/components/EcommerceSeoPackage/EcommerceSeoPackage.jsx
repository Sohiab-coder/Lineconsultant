import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";

const EcommerceSeoPackage = () => {
  const [count, setCount] = useState(1);
  const single = {
    name: "Ecommmerce Seo package",
    imgSrc: "/images/seo-idea-lightbulbs-ss-1920-600x338.jpg",
    price: "199.99",
    qty: count,
    id: "2",
  };
  const { name, imgSrc, price, qty,id } = single;

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
            <h4>What is Ecommerce SEO?</h4>
            <p>
              As search engines use increasingly complex algorithms to route
              searchers around the web, they often treat individual searches
              differently. Ecommerce SEO focuses on optimizing an ecommerce
              website to help its products become found through both search
              engines and product searches online. Ecommerce SEO specialists
              understand the nuance of searching in ecommerce and build
              strategies that produce results at a granular level, helping
              online stores sell more products.
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
            <button onClick={() => addToCard({ name, imgSrc, price, qty,id })}>
              Add To Card
            </button>
          </div>
        </div>
      </div>
      <div className="single-product-buttom">
        <div className="single-product-buttom-heading">
          <h1>Description</h1>
          <h4 className="single-product-buttom-title">
            How does it benefit me?
          </h4>
          <p className="single-product-buttom-para">
            In short, more search traffic means more opportunities to sell a
            product. Relevant traffic means a better conversion rate. Our
            ecommerce SEO strategies focus on increasing relevant traffic by
            identifying what someone is likely to search for when looking for a
            particular product and optimizing around those keywords. You’ll see
            an increase in traffic, sales, and your conversion ratio.
          </p>
          <p className="single-product-buttom-para">
            An ecommerce SEO strategy is a long-term strategy requiring months
            of investment to be able to see results. Search engines are
            constantly changing how they perceive websites and which factors
            they deem produce the most useful results for the end user. It can
            often take upwards of six months to see results, but the results can
            have a profound impact.
          </p>
          <h3 className="single-product-buttom-title-h3">Our Strategy</h3>
          <h4 className="single-product-buttom-title">Technical Analysis</h4>
          <p className="single-product-buttom-para">
            A complete technical analysis involves a full website audit to
            identify issues with a website that may cause limited SEO
            performance, a look into how the website is represented online, and
            what competitors in the space are doing. All of this serves as a
            foundation for the ongoing strategy used to achieve the results.
            During this phase, keyword research is performed at a granular level
            to ensure the right keywords are being targeted for individual
            product pages in addition to key pages on the online store.
          </p>
          <h4 className="single-product-buttom-title">On Page Optimization</h4>
          <p className="single-product-buttom-para">
            On page optimization involves updating content on product pages
            alongside ensuring that each product page has all of the information
            required to allow search engines to value the information within the
            listing. Different technical aspects of each page are analyzed and
            adjustments are made in areas including meta data on the page and
            the structure of the URLs. Our SEO experts work to ensure that
            technical limits are overcome to give more control over relevant
            information.
          </p>
          <h4 className="single-product-buttom-title">Off Page Optimization</h4>
          <p className="single-product-buttom-para">
            Search engine optimization for online stores often relies on off
            page elements to build authority and ensure that products are being
            found online. Our SEO experts will investigate different channels
            where a product placement or reference can both be a powerful
            reference for web users and a relevant incoming link for the
            product. This also involves in ensuring that products are being
            found in relevant product directories where multiple online stores
            are catalogued to help enthusiasts and professionals find the
            products they need.
          </p>
          <h4 className="single-product-buttom-title">
            Reporting and Management
          </h4>
          <p className="single-product-buttom-para">
            The job of an SEO expert is never done. SEO is an ongoing practice
            due to the competitive nature of selling products online. Often
            times the competition is continuing to invest in their SEO, thus it
            becomes important for us to continue to monitor search performance
            and to account for new developments within the algorithms used to
            determine placement. We continue to deliver reports on performance
            and efforts invested in on page and off page elements for SEO
            benefit. Maintenance is performed to ensure that investments are
            continuing to serve value for search performance and to replace lost
            links as websites change their structure or content over time
          </p>
        </div>
      </div>
    </div>
  );
};

export default EcommerceSeoPackage;
