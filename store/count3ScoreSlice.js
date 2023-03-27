import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 1,
};


export const count3ScoreSlice = createSlice({
  name: "count3Score",
  initialState,
  reducers: {
    setcount3Score: (state,action) => {
      state.value = action.payload;
    },
  },
});



// Action creators are generated for each case reducer function
export const { setcount3Score } = count3ScoreSlice.actions;


export default count3ScoreSlice.reducer;
