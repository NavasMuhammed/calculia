import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 1,
};


export const count4QstnSlice = createSlice({
  name: "count4Qstn",
  initialState,
  reducers: {
    setcount4Qstn: (state,action) => {
      state.value = action.payload;
    },
  },
});



// Action creators are generated for each case reducer function
export const { setcount4Qstn } = count4QstnSlice.actions;


export default count4QstnSlice.reducer;
