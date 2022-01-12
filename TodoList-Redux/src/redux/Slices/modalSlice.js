import { createSlice } from '@reduxjs/toolkit';
export const modalSlice=createSlice({
  name: 'modal',
  initialState:{},
  reducers:{
    openModal:(state,action)=>{

    }  
}
});

export const modalActions=modalSlice.actions;
export default modalSlice.reducer;