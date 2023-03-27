import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 1,
};


export const count2ScoreSlice = createSlice({
  name: "count2Score",
  initialState,
  reducers: {
    setcount2Score: (state,action) => {
      state.value = action.payload;
    },
  },
});



// Action creators are generated for each case reducer function
export const { setcount2Score } = count2ScoreSlice.actions;


export default count2ScoreSlice.reducer;
