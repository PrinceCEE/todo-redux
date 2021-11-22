import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/createTodoSlice";
import authReducer from "../features/auth/authSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    todos: todoReducer,
  },
});
