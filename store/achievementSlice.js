import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};
//initialstate for an incoming array
// const initialState = {
//   value: [],
// };


export const achievementSlice = createSlice({
    name:"achievement",
    initialState,
    reducers:{
      setAchievements:(state,action)=>{
        state.value = action.payload;
      }
    }})

// Action creators are generated for each case reducer function
export const { setAchievements } = detailsSlice.actions;


export default detailsSlice.reducer;
