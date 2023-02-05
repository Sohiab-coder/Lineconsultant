import React from "react";
import { Link } from "react-router-dom";
import "./Home8.css";

const Home8 = () => {
  return (
    <section className="home-8">
      <div className="home-8-container">
        <div className="home-8-heading">
          <h3>We are energetic</h3>
          <h2>
            Flexible <span style={{ color: "#0026ff" }}>pricing </span> plans{" "}
          </h2>
        </div>
        <div className="home-8-items">
          <div className="home-8-item">
            <div className="home-8-side-img">
              <img
                src="https://redpondinc.com/wp-content/uploads/2019/04/pricing_bg_shape_top.png"
                alt=""
              />
            </div>
            <div className="home-8-card">
              <Home8Card
                tag={"Starter Package"}
                price={"99.99"}
                li1={"Business analysis"}
                li2={"Local listings"}
                li3={"Research work"}
                li4={"Keyword strategy"}
                li5={"Support"}
                button={"Purchase Now"}
              />
              <Home8Card
                color1={"#fe6f0a"}
                color={"#0026ff"}
                tag={"Ecom. Seo package"}
                price={"199.99"}
                li1={"Technical Analysis"}
                li2={"On Page Optimization"}
                li3={"Off Page Optimization"}
                li4={"Reporting and Management"}
                li5={"Support 24/7"}
                button={"Purchase Now"}
                color2={"#fff"}
                bgColor={"#0026ff"}
                bc={"#0026ff"}
              />
              <Home8Card
                tag={"Premium Seo package"}
                price={"499.99"}
                li1={"Rank Targeting and Tracking"}
                li2={"Technical On-Page Optimization"}
                li3={"Off-Page Optimization with Linking"}
                li4={"6 Original Content/Blog Posts"}
                li5={"Support 24/7"}
                button={"Purchase Now"}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home8;

function Home8Card({
  color,
  color1,
  tag,
  price,
  li1,
  li2,
  li3,
  li4,
  li5,
  button,
  color2,
  bgColor,
  bc,
}) {
  return (
    <div className="home-8-cart-box">
      <div className="home-8-cart-tag">
        <h3 style={{ color: color1 }}>{tag}</h3>
      </div>
      <div className="home-8-cart-price">
        <span style={{ color: color }}>$</span>
        <h2 style={{ color: color }}>{price}</h2>
      </div>
      <div className="home-8-cart-list">
        <ul>
          <li>{li1}</li>
          <li>{li2}</li>
          <li>{li3}</li>
          <li>{li4}</li>
          <li>{li5}</li>
        </ul>
      </div>
      <div className="home-8-card-btn">
        <Link
          style={{ color: color2, backgroundColor: bgColor, borderColor: bc }}
          to={"/shop"}
        >
          {button}
        </Link>
      </div>
    </div>
  );
}
