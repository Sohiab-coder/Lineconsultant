import axios from "axios";

export const contactForm =
  (name, lastName, email, message) => async (dispatch) => {
    try {
      dispatch({ type: "contactRequest" });

      const { data } = await axios.post(
        "/api/v1/contact",
        {
          name,
          lastName,
          email,
          message,
        },
        {
          headers: {
            "Content-type": "application/json",
          },
        }
      );

      dispatch({ type: "contactSuccess", payload: data.message });
    } catch (error) {
      dispatch({ type: "contactFail", payload: error.response.data.message });
    }
  };

export const webForm = (webUrl, email) => async (dispatch) => {
  try {
    dispatch({ type: "webFormRequest" });

    const { data } = await axios.post(
      "/api/v1/webform",
      {
        webUrl,
        email,
      },
      {
        headers: {
          "Content-type": "application/json",
        },
      }
    );

    dispatch({ type: "contactSuccess", payload: data.message });
  } catch (error) {
    dispatch({ type: "contactFail", payload: error.response.data.message });
  }
};

export const orderForm =
  (
    name,
    lastName,
    companyName,
    country,
    state,
    streetAdress,
    city,
    postcode,
    phone,
    email,
    prodQty,
    prodName,
    prodPrice
  ) =>
  async (dispatch) => {
    try {
      dispatch({ type: "orderFormRequest" });

      const { data } = await axios.post(
        "/api/v1/orderform",
        {
          name,
          lastName,
          companyName,
          country,
          state,
          streetAdress,
          city,
          postcode,
          phone,
          email,
          prodQty,
          prodName,
          prodPrice,
        },
        {
          headers: {
            "Content-type": "application/json",
          },
        }
      );

      dispatch({ type: "orderFormSuccess", payload: data.message });
    } catch (error) {
      dispatch({ type: "orderFormFail", payload: error.response.data.message });
    }
  };
