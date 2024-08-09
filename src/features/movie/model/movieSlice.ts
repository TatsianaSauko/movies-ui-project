import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchMovies, fetchRandomMovie, fetchMoviesTop } from "../api/fetchMovies";
import { Movie } from "./movieTypes";

interface MovieState {
    movies: Movie[];
    status: "idle" | "loading" | "succeeded" | "failed";
    error: string | null;
    randomMovie: Movie | null;
    selectedMovie: Movie | null;
    randomMovieStatus: "idle" | "loading" | "succeeded" | "failed";
}

const initialState: MovieState = {
    movies: [],
    status: "idle",
    error: null,
    randomMovie: null,
    selectedMovie: null,
    randomMovieStatus: "idle",
};

const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        setSelectedMovie: (state, action: PayloadAction<Movie>) => {
            state.selectedMovie = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchMovies.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchMovies.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.movies = action.payload;
            })
            .addCase(fetchMovies.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message || "Something went wrong";
            })
            .addCase(fetchRandomMovie.pending, (state) => {
                state.randomMovieStatus = "loading";
            })
            .addCase(fetchRandomMovie.fulfilled, (state, action) => {
                state.randomMovieStatus = "succeeded";
                state.randomMovie = action.payload;
            })
            .addCase(fetchRandomMovie.rejected, (state, action) => {
                state.randomMovieStatus = "failed";
                state.error = action.error.message || "Something went wrong";
            })
            .addCase(fetchMoviesTop.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchMoviesTop.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.movies = action.payload;
            })
            .addCase(fetchMoviesTop.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message || "Something went wrong";
            });
    },
});

export const { setSelectedMovie } = movieSlice.actions;
export default movieSlice.reducer;
