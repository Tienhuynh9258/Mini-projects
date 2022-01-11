import { createSlice } from '@reduxjs/toolkit';
import User from '../../data/userdata'
export default createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: false,
    user: User
  },
  reducers: {
    loginUser: (state, action) => {
      const loginuser=state.user.find(loginuser =>loginuser.email===action.payload.email&&loginuser.password===action.payload.password)
      if(loginuser) state.isAuthenticated=true
    },
    registerUser: (state,action) =>{
        const loginuser=state.user.find(loginuser =>loginuser.email===action.payload.email)
        if(!loginuser) {
            state.user.push(action.payload);
            state.isAuthenticated=true;
        }
    },
    logoutUser: (state,action) => {
        state.isAuthenticated=false;
    }
  },
});