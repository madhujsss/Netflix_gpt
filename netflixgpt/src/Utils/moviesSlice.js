import { createSlice } from '@reduxjs/toolkit'

const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        nowPlayingMovies : null,
        popularMovies:null,
        trailerVideo : null,
        toprated:null,
        upcoming:null,
    },
    reducers: {
        addNowPlayingMovies : (state, action) => {
           state.nowPlayingMovies = action.payload;
        },
        addPopularMovies : (state, action) => {
            state.popularMovies = action.payload;
         },
         addTopratedMovies : (state, action) => {
            state.toprated = action.payload;
         },
         addUpcomingMovies : (state, action) => {
            state.upcoming = action.payload;
         },
        addTrailerVideo :(state, action) => {
      state.trailerVideo = action.payload;
        }
    }
});

export const {addNowPlayingMovies, addTrailerVideo, addPopularMovies,addTopratedMovies,addUpcomingMovies} = moviesSlice.actions;
export default moviesSlice.reducer;