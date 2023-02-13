import axios from "axios";

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: "loginRequest" });

    const { data } = await axios.post(
      "/api/v1/login",
      { email, password },
      {
        headers: {
          "Content-type": "application/json",
        },
      }
    );

    dispatch({ type: "loginSuccess", payload: data });
  } catch (error) {
    dispatch({ type: "loginFail", payload: error.response.data.message });
  }
};

export const loadUser = () => async (dispatch) => {
  try {
    dispatch({ type: "loadUserRequest" });

    const { data } = await axios.get("/api/v1/me");

    dispatch({ type: "loadUserSuccess", payload: data.user });
  } catch (error) {
    dispatch({ type: "loadUserFail", payload: error.response.data.message });
  }
};

export const register = (formdata) => async (dispatch) => {
  try {
    dispatch({ type: "registerRequest" });

    const { data } = await axios.post(`/api/v1/register`, formdata, {
      headers: {
        "Content-type": "multipart/form-data",
      },
    });

    dispatch({ type: "registerSuccess", payload: data });
  } catch (error) {
    dispatch({ type: "registerFail", payload: error.response.data.message });
  }
};

export const logout = () => async (dispatch) => {
  try {
    dispatch({ type: "logoutRequest" });

    const { data } = await axios.get("/api/v1/logout");

    dispatch({ type: "logoutSuccess", payload: data.message });
  } catch (error) {
    dispatch({ type: "logoutFail", payload: error.response.data.message });
  }
};

export const getAllUsers = () => async (dispatch) => {
  try {
    dispatch({ type: "getAllUserRequest" });

    const { data } = await axios.get("/api/v1/users");

    dispatch({ type: "getAllUserSuccess", payload: data.users });
  } catch (error) {
    dispatch({ type: "getAllUserFail", payload: error.response.data.message });
  }
};

export const deleteUserAdmin = (id) => async (dispatch) => {
  try {
    dispatch({ type: "deleteUserRequest" });

    const { data } = await axios.delete(`/api/v1/user/${id}`);

    dispatch({ type: "deleteUserSuccess", payload: data.message });
  } catch (error) {
    dispatch({ type: "deleteUserFail", payload: error.response.data.message });
  }
};

export const singleUserAdmin = (id) => async (dispatch) => {
  try {
    dispatch({ type: "singleUserRequest" });

    const { data } = await axios.get(`/api/v1/user/${id}`);

    dispatch({ type: "singleUserSuccess", payload: data.user });
  } catch (error) {
    dispatch({ type: "singleUserFail", payload: error.response.data.message });
  }
};
