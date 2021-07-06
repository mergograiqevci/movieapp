import React,{useState} from "react";
import { TextInput ,View ,StyleSheet,TouchableOpacity} from "react-native";
import { EvilIcons } from '@expo/vector-icons'; 
const SearchBar=({onTermChange})=>{
    const[currentSearch,setCurrentSearch]=useState("");// movie wqeqweq
    return (
        <View style={style.view}>
            <TextInput 
                style={style.input}
                onChangeText={newTerm=>setCurrentSearch(newTerm)}
                placeholder="Search here..." 
                placeholderTextColor="white"
                />
                
            <TouchableOpacity style={style.icon} onPress={()=>onTermChange(currentSearch)}>
                <EvilIcons 
                    name="search" 
                    size={40} 
                    color="white" />
            </TouchableOpacity>
        </View>
    );
    
}

const style=StyleSheet.create({
    view:{
        flexDirection:'row',
        borderWidth:1,
        borderColor:'white',
        borderRadius:12,
        height:50,
        margin:5,
        padding:5
    },
    icon:{
      alignSelf:'center'  
    },
    input:{
        fontSize:18,
        flex:1,
        color:'white'
    }
});
export default SearchBar;