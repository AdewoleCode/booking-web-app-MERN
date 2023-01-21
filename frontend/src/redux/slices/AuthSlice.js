import { createSlice } from '@reduxjs/toolkit'
import { useEffect } from 'react';

const initialState = {
    user: null,
    loading: false,
    error: null
}

  

const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginStart: (state, action) => {

        
        state.user = null
    },
    loginSuccess: (state, action) => {
        // const loggedInUser = action.payload
         state.user = action.payload
    },
    loginFailure: (state, action) => {
        state.user = null
    },
    logout: (state, action) => {
        state.user = null
    }
  }
});




export const AuthActions = AuthSlice.actions

export default AuthSlice.reducer