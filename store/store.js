import { configureStore } from "@reduxjs/toolkit";
import colorSlice from "./colorSlice";
import detailsSlice from "./detailsSlice";
import scoreSlice from "./scoreSlice";
import countQstnSlice from "./countQstnSlice";
import countScoreSlice  from "./countScoreSlice";

export const store = configureStore({
  reducer: {
    color: colorSlice,
    details:detailsSlice,
    score:scoreSlice,
    countQstn:countQstnSlice,
    countScore:countScoreSlice,
  },
});