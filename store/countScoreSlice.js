import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 1,
};


export const countScoreSlice = createSlice({
  name: "countScore",
  initialState,
  reducers: {
    setcountScore: (state,action) => {
      state.value = action.payload;
    },
  },
});



// Action creators are generated for each case reducer function
export const { setcountScore } = countScoreSlice.actions;


export default countScoreSlice.reducer;
