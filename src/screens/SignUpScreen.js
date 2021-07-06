import React,{useState} from "react";
import LoginSignUpForm from "../../components/LoginSignUpForm";
import { insertNewUser } from "../../store/auth-actions";
import { useSelector,useDispatch } from "react-redux";
const LoginScreen = ({navigation})=>{
    const[username,setUsername]=useState("");
    const[password,setPassword]=useState("");
    const dispatch=useDispatch();
    const response=useSelector((state)=>state.auth.signUpResponse);

    const onSubmitButton = () =>{
        dispatch(insertNewUser(username,password,()=>navigation.navigate("Login")));
    }
    return(
        <LoginSignUpForm 
            title="SIGN UP"
            navigation={navigation}
            navigateTo="Login"
            usernameTerm={value=>setUsername(value)}
            passwordTerm={value=>setPassword(value)}
            registerOrLoginText="Have an account ? Login"
            goToAdminPanelText=""
            requestResponse={response.message}
            buttonText="SIGN UP"
            onSubmit={onSubmitButton}
            />
    );
}
export default LoginScreen;