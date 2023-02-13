import React from "react";
import { Link } from "react-router-dom";
import "./RefundPolicy.css";

const RefundPolicy = () => {
  return (
    <section className="refund-policy">
      <div className="banner">
        <div className="about-text">
          <h1>Refund Policy </h1>
        </div>
      </div>
      <div className="refund-center">
        <div className="refund-heading">
          <h2>Digital Products Refund Policy</h2>
        </div>

        <div className="refund-text">
          <h2>Purchase Terms of Agreement</h2>
          <p>
            The purchase of digital products, including subscription Packages
            downloads and online material is subject to the following terms and
            conditions. Consumers are advised to review carefully before making
            any purchase.
          </p>
          <h2>Payment + Refund Policy</h2>
          <p>
            All transactions for purchase of intangible products, pdf downloads,
            resource material, and online content are made through payment
            gateways such as PayPal or Stripe that use SSL encryption. These
            payment gateways are safe and secure for using all types of credit
            cards and debit cards in different countries and your details are
            not stored during this process.
          </p>
          <p>
            Since your purchase is a digital product, it is deemed “used” after
            download or opening, and all purchases made on{" "}
            <a href="https://www.lineconsultant.com/" target={"blank"}>
              www.LineConsultant.com
            </a>{" "}
            are non-refundable or exchangeable. Since the products made
            available here are intangible, there is a strict no refund policy.
          </p>
          <p>
            We reserves the right to amend any information, including but not
            limited to prices, technical specifications, terms of purchase and
            product or service offerings without prior notice.
          </p>
          <h2>Delivery of Goods and Services</h2>
          <p>
            If you do not receive the digital product link upon purchasing, you
            can immediately contact (contact@lineconsultant.com) with your
            transaction/payment details to ensure your product is delivered as
            soon as possible.
          </p>
        </div>
      </div>
      <div className="info-container">
        <div className="info">
          <div className="info-text">
            <h2>
              Interested To <br /> Get Our Featured Service{" "}
            </h2>
          </div>
          <div className="info-btn">
            <Link to={"/shop"}>Get Started Now</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RefundPolicy;
