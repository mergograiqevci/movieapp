import javaServer from "../api/javaServer";
import { authActions } from "./auth-slice";

export const LoginUser=(username,password,callback)=>{
    return async (dispatch)=>{
        const fetchData=async() =>{
            const jsonRequest = JSON.stringify({ username,password});
            const response=await javaServer.post("/loginWithUser",jsonRequest,{
                headers:{
                  'Content-Type': 'application/json'
                }
              });
            
            const data= await response.data;
            return data;
        };
        try {
            const response=await fetchData();
            dispatch(authActions.loginRequest({message:response}));
            if(callback && response.message==="Success"){
                dispatch(authActions.userIsLoggedIn({message:true}))
                dispatch(authActions.userIsAdmin({message:false}))
                callback();
            }
        } catch (error) {
            console.log(error);
        }
    }
}
export const insertNewUser=(username,password,callback)=>{
    return async (dispatch)=>{
        const fetchData=async() =>{
            const jsonRequest = JSON.stringify({ username,password});
            const response=await javaServer.post("/insertNewUser",jsonRequest,{
                headers:{
                  'Content-Type': 'application/json'
                }
              });
            
            const data= await response.data;
            return data;
        };
        try {
            const response=await fetchData();
            dispatch(authActions.signUpRequest({message:response}));
            if(callback && response.message==="Success"){
                callback();
            }
        } catch (error) {
            console.log(error);
        }
    }
}
export const adminLogin=(username,password,callback)=>{
    return async (dispatch)=>{
        const fetchData=async() =>{
            const jsonRequest = JSON.stringify({ username,password});
            const response=await javaServer.post("/adminLogin",jsonRequest,{
                headers:{
                  'Content-Type': 'application/json'
                }
              });
            
            const data= await response.data;
            return data;
        };
        try {
            const response=await fetchData();
            dispatch(authActions.loginRequest({message:response}));
            if(callback && response.message==="Success"){
                dispatch(authActions.userIsLoggedIn({message:true}))
                dispatch(authActions.userIsAdmin({message:true}))
                callback();
            }
        } catch (error) {
            console.log(error);
        }
    }
}
export const logOut=()=>{
    return (dispatch)=>{
        dispatch(authActions.userIsLoggedIn({message:false}))
    }
    
}