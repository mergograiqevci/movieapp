import React,{useState} from "react";
import LoginSignUpForm from "../../components/LoginSignUpForm";
import { adminLogin } from "../../store/auth-actions";
import { useSelector,useDispatch } from "react-redux";
const AdminLoginScreen = ({navigation})=>{
    const[username,setUsername]=useState("");
    const[password,setPassword]=useState("");
    const dispatch=useDispatch();
    const response=useSelector((state)=>state.auth.loginResponse);

    const onSubmitButton = () =>{
        dispatch(adminLogin(username,password,()=>navigation.navigate("MOVIES")));
    }
    return(
        <LoginSignUpForm 
            title="ADMIN PANEL"
            navigation={navigation}
            navigateTo="SignUp"
            usernameTerm={value=>setUsername(value)}
            passwordTerm={value=>setPassword(value)}
            registerOrLoginText="Don't have an account ? Sign Up"
            goToAdminPanelText=""
            requestResponse={response.message}
            buttonText="LOGIN"
            onSubmit={onSubmitButton}
            />
    );
}
export default AdminLoginScreen;