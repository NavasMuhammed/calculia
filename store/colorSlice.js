import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "sff",
};


export const colorSlice = createSlice({
  name: "color",
  initialState,
  reducers: {
    setColor: (state,action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setColor } = colorSlice.actions;

export default colorSlice.reducer;
