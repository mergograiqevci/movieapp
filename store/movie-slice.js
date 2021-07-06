import { createSlice } from "@reduxjs/toolkit";
const initialState={allMovies:[],movieByYear:[],upComingMovie:[],
    searchedMovie:[],insertMovie:[]};


const movieSlice=createSlice({
    name:'movies',
    initialState,
    reducers:{
        setAllMovies(state,action)
        {
            state.allMovies=action.payload.movies;
        },
        setMovieByYear(state,action)
        {
            state.movieByYear=action.payload.movies;
        },
        setUpComingMovie(state,action)
        {
            state.upComingMovie=action.payload.movies;
        },
        setSearchedMovie(state,action)
        {
            state.searchedMovie=action.payload.movies;
        },
        insertNewMovie(state,action)
        {
            state.insertMovie=action.payload.movies;
        }
    }
})
export const movieActions=movieSlice.actions;

export default movieSlice;