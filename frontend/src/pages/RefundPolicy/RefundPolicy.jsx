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
          <h2>Refund Policy</h2>
        </div>

        <div className="refund-text">
          <p>
            All the plan services will be provided to the customer digitally via
            the Internet.
          </p>
          <p>If you have any questions about this policy, please contact us.</p>
          <p>
            We ensure the refunds in order to provide the highest level of
            service possible, such that they attain the outmost benefits every
            time. We try our level best to offer quality services that match
            every aspect of the business of our esteemed customers. Refund to
            Payments in any custom design project is made by us as a courtesy to
            the client however our internal management reserves the complete
            right to approve the refund request of any customer.
          </p>
          <p>
            Refund Policy for New Accounts are covered by a 30 day money back
            guarantee where we refund your money if you are dissatisfied with
            our works. In case when a client is not completely satisfied with
            our services, we can provide a refund which takes a maximum of 30
            working days where we process in the clients account either by
            Credits or direct deposit through the bank account.
          </p>
          <p>
            All refunds will be issued to the original purchaser in the same
            Bank account as provided.
          </p>
          <p>
            Refunds for all customers and unsatisfied work issues will be made
            in the proper approval of the client. The customer needs to specify
            the details of account and reason to the associates after which we
            will proceed as per requirements.
          </p>
          <h5>InFront Web Workers</h5>
          <div className="refund-contact">
            <p>
              <strong>Phone</strong> – +8183924439
            </p>
            <br />
            <p>
              <strong>Email</strong> – contact@lineconsultant.com
            </p>
          </div>
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
