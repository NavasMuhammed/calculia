import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 1,
};


export const count4ScoreSlice = createSlice({
  name: "count4Score",
  initialState,
  reducers: {
    setcount4Score: (state,action) => {
      state.value = action.payload;
    },
  },
});



// Action creators are generated for each case reducer function
export const { setcount4Score } = count4ScoreSlice.actions;


export default count4ScoreSlice.reducer;
