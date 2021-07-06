import React from "react";
import { View , Text,TouchableOpacity,Image,FlatList,StyleSheet} from "react-native";
const EachMovieHorizontalMode= ({title,state,navigation})=>{
        return (
            <View style={style.view}>
                <Text style={style.titleLabel}>{title}</Text>
                <FlatList
                    data={state}
                    horizontal
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
                                    <Image source={{uri:item.movieImg}} 
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
        alignItems:'center'
    },
    label:{
        fontSize:15,
        fontWeight:'bold',
        margin:5,
        alignSelf:'center',
        color:'white'
    },
    img:{
        height:230,
        width:150,
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
export default EachMovieHorizontalMode;