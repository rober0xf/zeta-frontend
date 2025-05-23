import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./redux/counterSlice";

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

export default store;
