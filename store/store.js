import { configureStore } from "@reduxjs/toolkit";
import colorSlice from "./colorSlice";
import detailsSlice from "./detailsSlice";
import scoreSlice from "./scoreSlice";

export const store = configureStore({
  reducer: {
    color: colorSlice,
    details:detailsSlice,
    score:scoreSlice,
  },
});