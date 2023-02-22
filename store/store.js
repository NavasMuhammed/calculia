import { configureStore } from "@reduxjs/toolkit";
import colorSlice from "./colorSlice";

export const store = configureStore({
  reducer: {
    color: colorSlice,
  },
});