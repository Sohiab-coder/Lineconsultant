import axios from "axios";

export const createOrder = (order) => async (dispatch) => {
  try {
    dispatch({ type: "orderRequest" });

    const { data } = await axios.post("/api/v1/order/new", order, {
      headers: {
        "Content-type": "application/json",
      },
    });

    dispatch({ dispatch: "orderSuccess", payload: data });
  } catch (error) {
    dispatch({
      type: "orderFail",
      payload: error.response.data.message,
    });
  }
};

export const getAllOrder = () => async (dispatch) => {
  try {
    dispatch({ type: "getAllOrdersRequest" });

    const { data } = await axios.get("/api/v1/orders");

    dispatch({ type: "getAllOrdersSuccess", payload: data.orders });
  } catch (error) {
    dispatch({ type: "getAllOrdersFail", payload: error.response.data.message });
  }
};
