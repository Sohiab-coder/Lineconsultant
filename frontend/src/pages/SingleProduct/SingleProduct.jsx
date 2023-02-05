import React from "react";
import "./SingleProduct.css";
import { useParams } from "react-router-dom";
import BasicLevelSeoPackage from "../../components/basic-level-seo-package/BasicLevelSeoPackage";
import EcommerceSeoPackage from "../../components/EcommerceSeoPackage/EcommerceSeoPackage";
import StarterLevelSeoPackage from "../../components/StarterLevelSeoPackage/StarterLevelSeoPackage";
import PlusLevelSeoPackage from "../../components/PlusLevelSeoPackage/PlusLevelSeoPackage";
import ProLevelSeoPackage from "../../components/ProLevelSeoPackage/ProLevelSeoPackage";

const SingleProduct = () => {
  const params = useParams();

  return (
    <section className="single-product">
      {params.id === "basic-level-seo-package" ? (
        <BasicLevelSeoPackage />
      ) : params.id === "ecommerce-seo-package" ? (
        <EcommerceSeoPackage />
      ) : params.id === "starter-level-seo-package" ? (
        <StarterLevelSeoPackage />
      ) : params.id === "plus-level-seo-package" ? (
        <PlusLevelSeoPackage />
      ) : params.id === "pro-level-seo-package" ? (
        <ProLevelSeoPackage />
      ) : (
        "NAN"
      )}
    </section>
  );
};

export default SingleProduct;
