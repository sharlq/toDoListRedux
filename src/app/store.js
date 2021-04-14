import { configureStore } from '@reduxjs/toolkit';
import toDoReducer from "../features/checkbox/check"

export const store = configureStore({
  reducer: {
   todos: toDoReducer
  },
});
