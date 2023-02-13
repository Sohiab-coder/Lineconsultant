import axios from "axios";

export const changePassword =
  (oldPassword, newPassword, confirmPassword) => async (dispatch) => {
    try {
      dispatch({ type: "changePasswordRequest" });
      const { data } = await axios.put(
        "/api/v1/password/new",
        { oldPassword, newPassword, confirmPassword },
        {
          headers: {
            "Content-type": "application/json",
          },
        }
      );
      dispatch({ type: "changePasswordSuccess", payload: data.message });
    } catch (error) {
      dispatch({
        type: "changePasswordFail",
        payload: error.response.data.message,
      });
    }
  };

export const forgetPassword = (email) => async (dispatch) => {
  try {
    dispatch({ type: "forgetPasswordRequest" });
    const { data } = await axios.post(
      "/api/v1/password/forget",
      { email },
      {
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    dispatch({ type: "forgetPasswordSuccess", payload: data.message });
  } catch (error) {
    dispatch({
      type: "forgetPasswordFail",
      payload: error.response.data.message,
    });
  }
};

export const resetPassword =
  (token, password, confirmPassword) => async (dispatch) => {
    try {
      dispatch({ type: "resetPasswordRequest" });
      const { data } = await axios.post(
        `/api/v1/password/reset/${token}`,
        { password, confirmPassword },
        {
          headers: {
            "Content-type": "application/json",
          },
        }
      );
      dispatch({ type: "resetPasswordSuccess", payload: data.message });
    } catch (error) {
      dispatch({
        type: "resetPasswordFail",
        payload: error.response.data.message,
      });
    }
  };

export const changeProfile = (name, email) => async (dispatch) => {
  try {
    dispatch({ type: "changeProfileRequest" });
    const { data } = await axios.put(
      "/api/v1/profile/update",
      { name, email },
      {
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    dispatch({ type: "changeProfileSuccess", payload: data.message });
  } catch (error) {
    dispatch({
      type: "changeProfileFail",
      payload: error.response.data.message,
    });
  }
};

export const deleteProfile = () => async (dispatch) => {
  try {
    dispatch({ type: "deleteProfileRequest" });
    const { data } = await axios.get("/api/v1/profile/delete");
    dispatch({ type: "deleteProfileSuccess", payload: data.message });
  } catch (error) {
    dispatch({
      type: "deleteProfileFail",
      payload: error.response.data.message,
    });
  }
};
