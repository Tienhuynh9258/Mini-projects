import { configureStore } from '@reduxjs/toolkit';
import modalReducer from './Slices/modalSlice';
import todoListReducer from './Slices/todoListSlice';

const store = configureStore({
  reducer: {
    modal: modalReducer,
    todoList: todoListReducer,
  },
});

export default store;