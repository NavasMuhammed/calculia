import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "sff",
};
//initialstate for an incoming array
// const initialState = {
//   value: [],
// };


export const detailsSlice = createSlice({
    name:"details",
    initialState,
    reducers:{
      setDetails:(state,action)=>{
        state.value = action.payload;
      }
    }})

// Action creators are generated for each case reducer function
export const { setDetails } = detailsSlice.actions;


export default detailsSlice.reducer;
