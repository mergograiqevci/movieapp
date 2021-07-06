import { configureStore } from "@reduxjs/toolkit";
import movieSlice from "./movie-slice";
import authSlice from "./auth-slice";
const store=configureStore({
    reducer:{movies:movieSlice.reducer,auth:authSlice.reducer}
});


export default store;