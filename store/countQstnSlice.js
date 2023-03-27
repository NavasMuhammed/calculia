import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 1,
};


export const countQstnSlice = createSlice({
  name: "countQstn",
  initialState,
  reducers: {
    setcountQstn: (state,action) => {
      state.value = action.payload;
    },
  },
});



// Action creators are generated for each case reducer function
export const { setcountQstn } = countQstnSlice.actions;


export default countQstnSlice.reducer;
