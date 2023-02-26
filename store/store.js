import { configureStore } from "@reduxjs/toolkit";
import colorSlice from "./colorSlice";
import detailsSlice from "./detailsSlice";

export const store = configureStore({
  reducer: {
    color: colorSlice,
    details:detailsSlice,
  },
});