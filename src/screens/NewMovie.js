import React,{useState} from "react";
import NewMovieForm from "../../components/NewMovieForm";
import {insertNewMovie} from "../../store/movie-actions";
import { useDispatch, useSelector } from "react-redux";
const NewMovie = ()=>{
    const[movieName,setMovieName]=useState("");
    const[movieVideoUrl,setMovieVideoUrl]=useState("");
    const[movieImg,setMovieImg]=useState("");
    const[movieCategory,setMovieCategory]=useState("");
    const[movieContent,setMovieContent]=useState("");
    const[movieYear,setMovieYear]=useState("");
    const[movieDataReleased,setMovieDataReleased]=useState("");
    const dispatch=useDispatch();
    const insertMovie=useSelector((state)=>state.movies.insertMovie);
    
    const onInsertMovie = ()=>{
        dispatch(insertNewMovie({movieName,movieVideoUrl,movieImg,
            movieCategory,movieContent,movieYear,movieDataReleased},insertMovie));
    }
    return (
            <>
            <NewMovieForm
                onSetMovieName={value=>setMovieName(value)}
                onSetMovieVideoUrl={value=>setMovieVideoUrl(value)}
                onSetMovieImg={value=>setMovieImg(value)}
                onSetMovieCategory={value=>setMovieCategory(value)}
                onSetMovieContent={value=>setMovieContent(value)}
                onSetMovieYear={value=>setMovieYear(value)}
                onSetMovieDataReleased={value=>setMovieDataReleased(value)}
                responseMessage={insertMovie.message}
                onSubmit={onInsertMovie}
            />
            </>
    );
}
export default NewMovie;