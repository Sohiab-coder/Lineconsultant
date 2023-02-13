import axios from "axios";

export const getAllProducts = () => async (dispatch) => {
  try {
    dispatch({ type: "getAllProductRequest" });

    const { data } = await axios.get("/api/v1/allproducts");

    dispatch({ type: "getAllProductSuccess", payload: data.products });
  } catch (error) {
    dispatch({
      type: "getAllProductFail",
      payload: error.response.data.message,
    });
  }
};

export const getSingleProduct = (id) => async (dispatch) => {
  try {
    dispatch({ type: "getSingleProductRequest" });

    const { data } = await axios.get(`/api/v1/product/${id}`);

    dispatch({ type: "getSingleProductSuccess", payload: data.product });
  } catch (error) {
    dispatch({
      type: "getSingleProductFail",
      payload: error.response.data.message,
    });
  }
};
