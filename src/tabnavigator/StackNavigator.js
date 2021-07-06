import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {TouchableOpacity} from "react-native";
import HomeScreen from '../screens/HomeScreen';
import MovieDetails from "../screens/MovieDetails";
import NewMovie from "../screens/NewMovie";
import MovieCategory from "../screens/MovieCategory";
import LoginScreen from "../screens/LoginScreen";
import SignUpScreen from "../screens/SignUpScreen";
import AdminLoginScreen from "../screens/AdminLoginScreen";
import { Octicons } from '@expo/vector-icons'; 
const Stack=createStackNavigator();

const MovieStackNavigator = ({navigation}) =>{
    return (
        <Stack.Navigator 
            screenOptions={{headerStyle:{backgroundColor: "#121212"},
                headerTitleStyle: {color: '#121212'},headerTintColor: 'white'}}>
            <Stack.Screen 
                options={{
                    headerLeft: () => (
                    <TouchableOpacity style={{marginLeft:10}} onPress={() => navigation.openDrawer()}>
                    <Octicons name="three-bars" size={30} color="white" />
                    </TouchableOpacity>
                    )}} 
                name="HomeScreen" component={HomeScreen}/>
            <Stack.Screen name="MovieDetails" component={MovieDetails}/>
            <Stack.Screen name="MovieCategory" component={MovieCategory}/>  
        </Stack.Navigator>
    );
}
const NewMovieStackNavigator = ({navigation}) =>{
    return (
        <Stack.Navigator 
            screenOptions={{headerStyle:{backgroundColor: "#121212"},
                headerTitleStyle: {color: 'white'},headerTintColor: 'white'}}>
            <Stack.Screen 
                options={{
                    headerLeft: () => (
                    <TouchableOpacity style={{marginLeft:10}} onPress={() => navigation.openDrawer()}>
                    <Octicons name="three-bars" size={30} color="white" />
                    </TouchableOpacity>
                    )}}  
                name="ADD MOVIE" component={NewMovie}/> 
        </Stack.Navigator>
    );
}
const MainStackNavigator = () =>{
    return (
        <Stack.Navigator 
            screenOptions={{headerStyle:{backgroundColor: "#121212"},
                headerTitleStyle: {color: 'white'},headerTintColor: 'white'}}>
            <Stack.Screen name="Login" component={LoginScreen}/>
            <Stack.Screen name="SignUp" component={SignUpScreen}/>
            <Stack.Screen name="AdminLogin" component={AdminLoginScreen}/>
        </Stack.Navigator>
    );
}

export {MainStackNavigator,MovieStackNavigator,NewMovieStackNavigator}