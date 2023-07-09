import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    status: 'not-authenticated', //'checking' 'not-authenticated', 'authenticated'
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMessage: null,
  },
  reducers: {
    login: (state, action) => {},
    logout: (state, payload) => {},
    checkingCredentials: (state) => {
      state.status = ' checking'
    },
  },
});
// Los creadores de Slic/Acción de autenticación se generan para cada función de reducción de casos.
export const { login, logout, checkingCredentials } = authSlice.actions;
