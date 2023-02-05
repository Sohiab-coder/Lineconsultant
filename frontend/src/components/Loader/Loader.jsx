import React from "react";
import { TailSpin } from "react-loader-spinner";

const Loader = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      className="loading"
    >
      <TailSpin
        height="180"
        width="180"
        color="#0026ff"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};
export default Loader;
