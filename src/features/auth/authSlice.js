import { createSlice } from "@reduxjs/toolkit";
import { CREDENTIALS } from "../../app/constants";

const authSlice = createSlice({
  name: "auth",
  initialState: {},
  reducers: {
    login: (state, action) => {},
  },
});

export default authSlice.reducer;
