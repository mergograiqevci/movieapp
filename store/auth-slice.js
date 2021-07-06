import { createSlice } from "@reduxjs/toolkit";

const initialState={loginResponse:{},signUpResponse:{},isAdmin:false,isLoggedIn:false};
const authSlice=createSlice({
    name:'Auth',
    initialState,
    reducers:{
        loginRequest(state,action)
        {
            state.loginResponse=action.payload.message;
        },
        signUpRequest(state,action)
        {
            state.signUpResponse=action.payload.message;
        },
        userIsLoggedIn(state,action)
        {
            state.isLoggedIn=action.payload.message;
        },
        userIsAdmin(state,action)
        {
            state.isAdmin=action.payload.message;
        }
    }
});
export const authActions=authSlice.actions;

export default authSlice;