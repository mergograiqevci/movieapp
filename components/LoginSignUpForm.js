import React from "react";
import { View,ImageBackground,TextInput,Text,StyleSheet,TouchableOpacity} from "react-native";
import { Feather } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
const LoginSignUpForm = ({usernameTerm,passwordTerm,title,
    navigation,navigateTo,registerOrLoginText,goToAdminPanelText,requestResponse,buttonText,onSubmit})=>{
    const imgBackground={uri:"https://wallpapercave.com/wp/begWvvZ.jpg"};
    return(
        <View style={styles.container}>
            <ImageBackground source={imgBackground} style={styles.image}>
                <Text style={styles.appTitle}>{title}</Text>

                {requestResponse ? requestResponse!=="Success" ? 
                  <Text style={styles.requestResponse}>{requestResponse}</Text> 
                : null : null}

                <View style={styles.inputView}>
                    <Feather style={styles.icon} name="user" size={30} color="white" />
                    <TextInput style={styles.inputText}
                        placeholder="Username"
                        placeholderTextColor="white"
                        autoCorrect={false}
                        onChangeText={value=>usernameTerm(value)}
                    />
                </View>
                <View style={styles.inputView}>
                    <AntDesign style={styles.icon} name="lock" size={30} color="white" />
                    <TextInput style={styles.inputText}
                        placeholder="Password"
                        placeholderTextColor="white"
                        autoCorrect={false}
                        secureTextEntry={true}
                        onChangeText={value=>passwordTerm(value)}
                    />
                </View>
                <View style={styles.buttonView}>
                    <TouchableOpacity style={styles.buttonStyle} onPress={()=>onSubmit()}>
                        <Text style={styles.buttonText}>{buttonText}</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={()=>navigation.navigate(navigateTo)}>
                    <Text style={styles.signUpText}>{registerOrLoginText}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>navigation.navigate("AdminLogin")}>
                    <Text style={styles.signUpText}>{goToAdminPanelText}</Text>
                </TouchableOpacity>
            </ImageBackground>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column"
    },
    image: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center"
    },
    appTitle:{
        fontSize:45,
        color:'white',
        alignSelf:'center',
        marginBottom:60
    },
    inputView:{
        flexDirection:'row',
        borderBottomWidth:1,
        borderBottomColor:'white',
        height:60,
        marginHorizontal:5
    },
    inputText:{
        fontSize:16,
        color:'white',
        flex:1
    },
    icon:{
        alignSelf:'center',
        marginRight:5
    },
    buttonView:{
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:30
    },
    buttonStyle:{
        borderWidth:1,
        borderColor:'white',
        borderRadius:10,
        width:120,
        height:40,
        justifyContent:'center',
        marginHorizontal:10,
        marginTop:13,
        backgroundColor:'black'
    },
    buttonText:{
        fontSize:20,
        color:'white',
        textAlign:'center',
        fontWeight:'bold'
    },
    requestResponse:{
        fontSize:20,
        color:'red',
        textAlign:'center',
        marginTop:5,
        marginBottom:25
    },
    signUpText:{
        fontSize:16,
        color:'white',
        textAlign:'center',
        marginTop:20,
        fontWeight:'bold'
    }
  });
export default LoginSignUpForm;