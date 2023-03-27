import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};


export const scoreSlice = createSlice({
  name: "score",
  initialState,
  reducers: {
    setScore: (state,action) => {
      state.value = action.payload;
    },
  },
});



// Action creators are generated for each case reducer function
export const { setScore } = scoreSlice.actions;


export default scoreSlice.reducer;
