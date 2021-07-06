import React,{useEffect,useState} from "react";
import { View } from "react-native";
import {useSelector,useDispatch} from "react-redux";
import {ScrollView} from "react-native";
import {fetchAllMovies ,fetchMovieByYear,fetchUpComingMovie,fetchSearchedMovie} from "../../store/movie-actions";
import EachMovieHorizontalMode from "../../components/EachMovieHorizontalMode";
import SearchBar from "../../components/SearchBar";
import EachMovieVerticalMode from "../../components/EachMovieVerticalMode";
import { useIsFocused } from "@react-navigation/native";
const HomeScreen = ({navigation})=>{

  const dispatch=useDispatch();
  const allMovies=useSelector((state)=>state.movies.allMovies);
  const movieByYear=useSelector((state)=>state.movies.movieByYear);
  const upComingMovie=useSelector((state)=>state.movies.upComingMovie);
  const searchedMovie=useSelector((state)=>state.movies.searchedMovie);
  const [searchTerm,setSearchTerm]=useState("");
  const isFocused = useIsFocused();
   var date = new Date();
   var lastYear = (date.getFullYear()-1).toString();
   useEffect(()=>{
        dispatch(fetchAllMovies(allMovies));
        dispatch(fetchUpComingMovie(upComingMovie));
        dispatch(fetchMovieByYear(lastYear,movieByYear));
    },[dispatch,isFocused])
    
    useEffect(()=>{
      dispatch(fetchSearchedMovie(searchTerm,searchedMovie));
    },[searchTerm]);
   const basicView = ()=>{
     return (
      <ScrollView>
        <EachMovieHorizontalMode title="Popular" type="Popular" state={allMovies} navigation={navigation}/>
        <EachMovieHorizontalMode title="Last Year" type={lastYear} state={movieByYear} navigation={navigation}/>
        <EachMovieHorizontalMode title="Upcoming" type="Upcoming" state={upComingMovie} navigation={navigation}/>
      </ScrollView>
     );
   }
   const searchMovieView = ()=>{
     return(
      <EachMovieVerticalMode 
        title={"Searching: "+ searchTerm} 
        type={searchTerm} 
        state={searchedMovie} 
        navigation={navigation}
      /> 
    );
   }
    return (
        <View style={{backgroundColor:'#121212',flex:1}}>
          <SearchBar 
            onTermChange={newTerm=>setSearchTerm(newTerm)}
            />
          {searchTerm ? searchMovieView() : basicView() }
        </View>
    );
}

export default HomeScreen;