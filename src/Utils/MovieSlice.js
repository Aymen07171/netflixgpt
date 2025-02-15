import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
    },

    reducers: { 
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },

        addTrendingMovies: (state, action) => {
            state.trendingMovies = action.payload;
        },



        addTrailerVideo : (state,action) => {
            state.trailerVideo = action.payload;
        }
    }
})

export const { addNowPlayingMovies, addTrailerVideo, addTrendingMovies } = movieSlice.actions;
export default movieSlice.reducer;
