import { createSlice } from "@reduxjs/toolkit";
import { CREDENTIALS, loadDataFromStorage } from "../../app/constants";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    credentials: loadDataFromStorage(CREDENTIALS),
  },
  reducers: {
    login: (state, action) => {
      state.credentials = action.payload;
      localStorage.setItem(CREDENTIALS, JSON.stringify(state.credentials));
    },
    logout: (state) => {
      state.credentials = {};
      localStorage.removeItem(CREDENTIALS);
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
