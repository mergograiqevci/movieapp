import React from "react";
import {Text,ScrollView,View,Image,StyleSheet} from "react-native";
import { Video } from 'expo-av';
const MovieDetails=({route})=>{
    const { movieName, movieImg,movieVideoUrl,movieContent} = route.params;
    const video = React.useRef(null);
    return (
        <ScrollView style={{backgroundColor:'#121212',flex:1}}>
            <View style={styles.movieDetails}>
                <Image source={{uri:movieImg}} 
                style = {styles.img} />
                <View>
                    <Text style={styles.movieName}>{movieName}</Text>
                    <Text style={styles.movieContent}>{movieContent}</Text>                  
                </View>
            </View>
            <Video
                ref={video}
                style={styles.video}
                source={{
                uri: movieVideoUrl}}
                useNativeControls
                resizeMode="contain"
                isLooping
            />
        </ScrollView>
    );
}
const styles=StyleSheet.create({
    movieDetails:{
        flexDirection:'column'
    },
    movieName:{
        fontSize:20,
        fontWeight:'bold',
        marginTop:30,
        marginLeft:10,
        color:'white',
        alignSelf:'center'
    },
    movieContent:{
        marginTop:30,
        fontSize:14,
        marginLeft:10,
        color:'white',
        textAlign:'center'
    },
    img:{
        height:350,
        width:240,
        margin:5,
        borderWidth:1,
        borderColor:'white',
        borderRadius:15,
        margin:5,
        alignSelf:'center'
    },
    video: {
        height:400,
        left:0,
        right:0
      }
})
export default MovieDetails;