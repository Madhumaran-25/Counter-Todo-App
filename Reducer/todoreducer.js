import {createSlice} from '@reduxjs/toolkit';

let nextTodoId = 1;

const initialState = {
  todo: [],
};

export const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
        state.todo.push({
            id: nextTodoId++,
            text: action.payload,
          });
    },
    removeToDo: (state, action) => {
        state.todo = state.todo.filter(todo => todo.id !== action.payload);
    },
    
  },
});

export const {addTodo, removeToDo} = todoSlice.actions;

export default todoSlice.reducer;
