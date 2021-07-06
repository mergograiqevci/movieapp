import React from "react";
import {View,Text,TouchableOpacity,TextInput,StyleSheet,SafeAreaView, ScrollView,StatusBar} from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
const NewMovieForm =({
    onSetMovieName,onSetMovieVideoUrl,onSetMovieImg,
    onSetMovieCategory,onSetMovieContent,
    onSetMovieYear,onSetMovieDataReleased,responseMessage,onSubmit})=>{

    return(
        <SafeAreaView style={styles.view}>
            <ScrollView >
                {responseMessage ? <Text style={styles.responseMessage}>{responseMessage}</Text>:null}
                <MaterialCommunityIcons style={styles.movieIcon} name="movie-open-outline" size={90} color="white" />
                <Text style={styles.label}>Title:</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={text => onSetMovieName(text)}
                />
                <Text style={styles.label}>Video Url:</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={text => onSetMovieVideoUrl(text)}
                />
                <Text style={styles.label}>Image Url:</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={text => onSetMovieImg(text)}
                />
                <Text style={styles.label}>Content:</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={text => onSetMovieContent(text)}
                />
                <Text style={styles.label}>Category:</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={text => onSetMovieCategory(text)}
                />
                <Text style={styles.label}>Year:</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={text => onSetMovieYear(text)}
                /> 
                <Text style={styles.label}>Data Released:</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={text => onSetMovieDataReleased(text)}
                />
                <View style={styles.buttonView}>
                    <TouchableOpacity style={styles.buttonStyle} onPress={()=>onSubmit()}>
                        <Text style={styles.buttonText}>SAVE</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>               
        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    view:{
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        backgroundColor:'#121212'
    },
    input: {
      fontSize: 18,
      borderWidth: 1,
      borderRadius:10,
      borderColor: 'white',
      marginBottom: 15,
      height:38,
      padding:5
    },
    label: {
      fontSize: 20,
      marginBottom: 5,
      color:'white'
    },
    movieIcon:{
        alignSelf:'center'
    },
    responseMessage:{
        fontSize: 20,
        flexDirection:'row',
        textAlign:'center',
        color:'red'
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
    }
  });
export default NewMovieForm;
