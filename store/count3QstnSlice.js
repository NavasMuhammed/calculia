import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 1,
};


export const count3QstnSlice = createSlice({
  name: "count3Qstn",
  initialState,
  reducers: {
    setcount3Qstn: (state,action) => {
      state.value = action.payload;
    },
  },
});



// Action creators are generated for each case reducer function
export const { setcount3Qstn } = count3QstnSlice.actions;


export default count3QstnSlice.reducer;
