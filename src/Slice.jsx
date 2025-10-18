import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    list: [],
  },
  reducers: {
    addtodo: (state, action) => {
      const newTodo = {
        id: state.list.length + 1,
        text: action.payload,
      };
      state.list.push(newTodo);
    },
    editTodo: (state, action) => {
      const { id, text } = action.payload;
      const todoToEdit = state.list.find((todo) => todo.id === id);
      if (todoToEdit) {
        todoToEdit.text = text;
      }
    },
    deleteTodo: (state, action) => {
      state.list = state.list.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addtodo, editTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
    