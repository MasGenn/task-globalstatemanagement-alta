import { createSlice } from "@reduxjs/toolkit";

const Datas = [
  {
    text: "Mengerjakan Exercise",
    completed: false,
  },
  {
    text: "Mengerjakan Assignment",
    completed: true,
  },
];

const initialState = {
  value: Datas,
};

const todoReducer = createSlice({
  name: "todolist",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.value = [...todos, { text }];
      setTodos(newTodos) = action.payload;
    },
    delTodo: (state, action) => {
        state.value = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos) = action.payload;
    },
  },
});

export const { addTodo, delTodo } = todoReducer.actions;
export default todoReducer.reducer
