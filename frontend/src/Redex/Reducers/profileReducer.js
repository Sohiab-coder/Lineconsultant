import { createReducer } from "@reduxjs/toolkit";

export const profileReducer = createReducer(
  {},
  {
    changeProfileRequest: (state) => {
      state.loading = true;
    },
    changeProfileSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    changeProfileFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    changePasswordRequest: (state) => {
      state.loading = true;
    },
    changePasswordSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    changePasswordFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    forgetPasswordRequest: (state) => {
      state.loading = true;
    },
    forgetPasswordSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    forgetPasswordFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    resetPasswordRequest: (state) => {
      state.loading = true;
    },
    resetPasswordSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    resetPasswordFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    deleteProfileRequest: (state) => {
      state.loading = true;
    },
    deleteProfileSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    deleteProfileFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    clearErrors: (state) => {
      state.error = null;
    },
    clearMessages: (state) => {
      state.message = null;
    },
  }
);
