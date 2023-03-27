import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 1,
};


export const count2QstnSlice = createSlice({
  name: "count2Qstn",
  initialState,
  reducers: {
    setcount2Qstn: (state,action) => {
      state.value = action.payload;
    },
  },
});



// Action creators are generated for each case reducer function
export const { setcount2Qstn } = count2QstnSlice.actions;


export default count2QstnSlice.reducer;
