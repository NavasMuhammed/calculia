import { configureStore } from "@reduxjs/toolkit";
import colorSlice from "./colorSlice";
import detailsSlice from "./detailsSlice";
import scoreSlice from "./scoreSlice";
import countQstnSlice from "./countQstnSlice";
import countScoreSlice  from "./countScoreSlice";
import count2QstnSlice from "./count2QstnSlice";
import count2ScoreSlice from "./count2ScoreSlice";
import count3QstnSlice from "./count3QstnSlice";
import count3ScoreSlice from "./count3ScoreSlice";
import count4QstnSlice from "./count4QstnSlice";
import count4ScoreSlice from "./count4ScoreSlice";
import levelsSlice from "./levelsSlice";

export const store = configureStore({
  reducer: {
    color: colorSlice,
    details:detailsSlice,
    score:scoreSlice,
    countQstn:countQstnSlice,
    countScore:countScoreSlice,
    count2Qstn:count2QstnSlice,
    count2Score:count2ScoreSlice,
    count3Qstn:count3QstnSlice,
    count3Score:count3ScoreSlice,
    count4Qstn:count4QstnSlice,
    count4Score:count4ScoreSlice,
    levels:levelsSlice,
  },
});