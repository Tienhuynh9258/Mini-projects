import { configureStore } from '@reduxjs/toolkit';
import modalSlice from './Slices/modalSlice';
import todosSlice from './Slices/todoListSlice';

const store = configureStore({
  reducer: {
    modal: modalSlice.reducer,
    todoList: todosSlice.reducer,
  },
});

export default store;