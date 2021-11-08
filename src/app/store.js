import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    counter: (state = {}, action) => state,
  },
});

const state = {
  auth: {
    username: "",
    password: "",
    error: "",
  },
  todos: [],
};
