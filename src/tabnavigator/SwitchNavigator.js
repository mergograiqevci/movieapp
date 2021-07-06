import React from "react";
import DrawerNavigator from "./DrawerNavigator";
import { useSelector } from "react-redux";
import {MainStackNavigator} from "./StackNavigator";
const SwitchNavigator = () =>{
    const isLoggedIn=useSelector((state)=>state.auth.isLoggedIn);
    return(
        <> 
        {isLoggedIn ? <DrawerNavigator /> : <MainStackNavigator />}
        </>
    );
}
export {SwitchNavigator};