import javaServer from "../api/javaServer";
import { movieActions } from "./movie-slice";

export const fetchAllMovies=()=>{
    return async (dispatch)=>{
        const fetchData=async() =>{
            const response=await javaServer.get("/allMovies");
            
            const data= await response.data;
            return data;
        };
        try {
            const response=await fetchData();
            dispatch(movieActions.setAllMovies({movies:response}));
        } catch (error) {
            console.log(error);
        }
    }
}
export const fetchMovieByYear=(movieYear)=>{
    return async (dispatch)=>{
        const fetchData=async() =>{
            const jsonRequest = JSON.stringify({ movieYear});
            const response=await javaServer.post("/movieByYear",jsonRequest,{
                headers:{
                  'Content-Type': 'application/json'
                }
              });
            
            const data= await response.data;
            return data;
        };
        try {
            const response=await fetchData();
            dispatch(movieActions.setMovieByYear({movies:response}));
        } catch (error) {
            console.log(error);
        }
    }
}
export const fetchUpComingMovie=()=>{
    return async (dispatch)=>{
        const fetchData=async() =>{
            const jsonRequest = JSON.stringify({ movieDataReleased:"upcoming"});
            const response=await javaServer.post("/upComingMovie",jsonRequest,{
                headers:{
                  'Content-Type': 'application/json'
                }
              });
            
            const data= await response.data;
            return data;
        };
        try {
            const response=await fetchData();
            dispatch(movieActions.setUpComingMovie({movies:response}));
        } catch (error) {
            console.log(error);
        }
    }
}
export const fetchSearchedMovie=(movieName)=>{
    return async (dispatch)=>{
        const fetchData=async() =>{
            const jsonRequest = JSON.stringify({ movieName});
            const response=await javaServer.post("/movieByName",jsonRequest,{
                headers:{
                  'Content-Type': 'application/json'
                }
              });
            
            const data= await response.data;
            return data;
        };
        try {
            const response=await fetchData();
            dispatch(movieActions.setSearchedMovie({movies:response}));
        } catch (error) {
            console.log(error);
        }
    }
}
export const insertNewMovie=({movieName,movieVideoUrl,movieImg,movieCategory,
    movieContent,movieYear,movieDataReleased})=>{
    return async (dispatch)=>{
        const fetchData=async() =>{
            const jsonRequest = JSON.stringify({ movieName,movieVideoUrl,movieImg,
                movieCategory,movieContent,movieYear,movieDataReleased});
            const response=await javaServer.post("/insertNewMovie",jsonRequest,{
                headers:{
                  'Content-Type': 'application/json'
                }
              });
            
            const data= await response.data;
            return data;
        };
        try {
            const response=await fetchData();
            dispatch(movieActions.insertNewMovie({movies:response}));

        } catch (error) {
            console.log(error);
        }
    }
}