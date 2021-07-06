import React,{useEffect} from "react";
import { fetchMovieByCategory } from "../../store/movie-actions";
import EachMovieVerticalMode from "../../components/EachMovieVerticalMode";
import { useSelector,useDispatch} from "react-redux";

const MovieCategory = ({navigation}) =>{
    const category=navigation.getParam("category");
    const dispatch=useDispatch();
    const movieByCategoryResponse=useSelector((state)=>state.movies.movieByCategory);
    useEffect(()=>{
        dispatch(fetchMovieByCategory(category));
    },[dispatch])
    return(
         <EachMovieVerticalMode 
            title={"Category: "+category.toUpperCase()} 
            state={movieByCategoryResponse} 
            navigation={navigation}
        /> 
    );
}
export default MovieCategory;