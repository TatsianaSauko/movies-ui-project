import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchMovies, fetchRandomMovie, fetchMoviesTop } from "../api/fetchMovies";
import { Movie } from "./movieInterfaces";

interface MovieState {
    movies: Movie[];
    movieCount: number;
    popular: Movie[];
    search: Movie[];
    status: "idle" | "loading" | "succeeded" | "failed";
    error: string | null;
    randomMovie: Movie | null;
    selectedMovie: Movie | null;
    randomMovieStatus: "idle" | "loading" | "succeeded" | "failed";
    popularStatus: "idle" | "loading" | "succeeded" | "failed";
}

const initialState: MovieState = {
    movies: [],
    movieCount: 0,
    popular: [],
    search: [],
    status: "idle",
    error: null,
    randomMovie: null,
    selectedMovie: null,
    randomMovieStatus: "idle",
    popularStatus: "idle",
};

const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        setSelectedMovie: (state, action: PayloadAction<Movie>) => {
            state.selectedMovie = action.payload;
        },
        setMovies: (state, action: PayloadAction<Movie[]>) => {
            state.movies = action.payload;
        },
        setSearch: (state, action: PayloadAction<Movie[]>) => {
            state.search = action.payload;
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
                state.movieCount = action.payload.length;
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
                state.popularStatus = "loading";
            })
            .addCase(fetchMoviesTop.fulfilled, (state, action) => {
                state.popularStatus = "succeeded";
                state.popular = action.payload;
            })
            .addCase(fetchMoviesTop.rejected, (state, action) => {
                state.popularStatus = "failed";
                state.error = action.error.message || "Something went wrong";
            });
    },
});

export const { setSelectedMovie, setMovies, setSearch } = movieSlice.actions;
export default movieSlice.reducer;
