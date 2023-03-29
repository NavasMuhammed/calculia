import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};
//initialstate for an incoming array
// const initialState = {
//   value: [],
// };


export const levelsSlice = createSlice({
    name:"levels",
    initialState,
    reducers:{
      setLevels:(state,action)=>{
        state.value = action.payload;
      }
    }})

// Action creators are generated for each case reducer function
export const { setLevels } = levelsSlice.actions;


export default levelsSlice.reducer;
