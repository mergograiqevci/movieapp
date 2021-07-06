import React from "react";
import { View , Text,Image,TouchableOpacity,FlatList,StyleSheet} from "react-native";
const EachMovieVerticalMode= ({title,state,navigation})=>{
    const IMGNOTFOUND="https://i.pinimg.com/originals/a7/37/45/a7374590c10d5ec0b891913d303112e9.jpg";
        return (
            <View style={style.view}>
                <Text style={style.titleLabel}>{title}</Text>
                <FlatList
                    data={state}
                    keyExtractor={item=>(((parseInt(item.id))+Math.random() * (500000 - 1) + 1)).toString()}
                    renderItem={({item})=>{
                        return (
                            <TouchableOpacity onPress={()=>navigation.navigate("MovieDetails",{
                                movieName:item.movieName,
                                movieImg:item.movieImg,
                                movieVideoUrl:item.movieVideoUrl,
                                movieContent:item.movieContent
                            })}>
                                <View style={style.movieDetails}>
                                    <Image source={item.movieImg ? 
                                    {uri: item.movieImg} : {uri:IMGNOTFOUND}} 
                                        style = {style.img} />
                                    <Text style={style.label}>{item.movieName}</Text>
                                </View>
                            </TouchableOpacity>
                        );   
                    }}
                />
            </View>
        );
}
const style=StyleSheet.create({
    view:{
        alignItems:'stretch',
        padding:1,
        flex:1
    },
    movieDetails:{
        alignItems:'center',
        borderBottomWidth:1,
        borderBottomColor:'black',
        padding:5
    },
    label:{
        fontSize:15,
        fontWeight:'bold',
        margin:5,
        alignSelf:'center',
        color:'white'
    },
    img:{
        height:300,
        width:250,
        borderWidth:1,
        borderColor:'white',
        margin:5,
        borderRadius:15
    },
    titleLabel:{
        fontSize:18,
        fontWeight:'bold',
        margin:5,
        color:'white'
    }
  })
export default EachMovieVerticalMode;