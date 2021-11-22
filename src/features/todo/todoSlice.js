import { createSlice } from "@reduxjs/toolkit";
import { TODOS, loadDataFromStorage } from "../../app/constants";

const createTodoSlice = createSlice({
  name: "todo",
  initialState: loadDataFromStorage(TODOS),
  reducers: {
    addNewTodo: (state, action) => {
      state.push(action.payload);
      localStorage.setItem(TODOS, JSON.stringify(state));
    },
    toggleTodo: (state, action) => {
      const { index } = action.payload;
      state[index].isCompleted = !state[index].isCompleted;
      localStorage.setItem(TODOS, JSON.stringify(state));
    },
    deleteTodo: (state, action) => {
      const { index } = action.payload;
      state.splice(index, 1);
      localStorage.setItem(TODOS, JSON.stringify(state));
    },
    editTodo: (state, action) => {
      const { title, type, index } = action.payload;
      const task = state[index];
      task.title = title;
      task.type = type;
      localStorage.setItem(TODOS, JSON.stringify(state));
    },
  },
});

export const { addNewTodo, toggleTodo, editTodo, deleteTodo } =
  createTodoSlice.actions;

export default createTodoSlice.reducer;
