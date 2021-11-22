import { createSlice } from "@reduxjs/toolkit";
import { TODOS, loadDataFromStorage } from "../../app/constants";

const createTodoSlice = createSlice({
  name: "todo",
  initialState: loadDataFromStorage(TODOS),
  reducers: {
    addNewTodo: (state, action) => {
      state.push(action.payload);
      localStorage.setItem(TODOS, JSON.stringify(state.todos));
    },
    toggleTodo: (state, action) => {
      const { index } = action.payload;
      state[index].isCompleted = !state[index].isCompleted;
      localStorage.setItem(TODOS, JSON.parse(state));
    },
  },
});

export const { addNewTodo, toggleTodo } = createTodoSlice.actions;

export default createTodoSlice.reducer;
