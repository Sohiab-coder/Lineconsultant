import axios from "axios";

export const createProduct = (formData) => async (dispatch) => {
  try {
    dispatch({ type: "createrProductRequest" });

    const { data } = await axios.post("/api/v1/product/new", formData, {
      headers: {
        "Content-type": "multipart/form-data",
      },
    });

    dispatch({ type: "createrProductSuccess", payload: data });
  } catch (error) {
    dispatch({
      type: "createrProductFail",
      payload: error.response.data.message,
    });
  }
};

export const deleteProductAdmin = (id) => async (dispatch) => {
  try {
    dispatch({ type: "deleteProductsRequest" });

    const { data } = await axios.delete(`/api/v1/product/${id}`)

    dispatch({ type: "deleteProductsSuccess", payload: data.message });
  } catch (error) {
    dispatch({
      type: "deleteProductsFail",
      payload: error.response.data.message,
    });
  }
};
