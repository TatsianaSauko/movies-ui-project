// import axios from "axios";
// import { createAsyncThunk } from "@reduxjs/toolkit";
// import { BASE_URL, Endpoints } from "./constants";

// export const fetchMovies = createAsyncThunk("movies/fetchMovies", async () => {
//     const response = await axios.get(`${BASE_URL}`);
//     return response.data;
// });

// export const fetchRandomMovie = createAsyncThunk("movies/fetchRandomMovie", async () => {
//     const response = await axios.get(`${BASE_URL}${Endpoints.Random}`);
//     return response.data;
// });

// export const fetchMoviesTop = createAsyncThunk("movies/fetchMoviesTop", async () => {
//     const response = await axios.get(`${BASE_URL}${Endpoints.Top10}`);
//     return response.data;
// });

// export const fetchQuery = async ({ value }: { value: string }) => {
//     const response = await fetch(`${BASE_URL}?title=${value}`);
//     const data = await response.json();
//     return data;
// };

import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL, Endpoints } from "./constants";

export const fetchMovies = createAsyncThunk("movies/fetchMovies", async () => {
    const response = await fetch(`${BASE_URL}`);
    if (!response.ok) {
        throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
});

export const fetchRandomMovie = createAsyncThunk("movies/fetchRandomMovie", async () => {
    const response = await fetch(`${BASE_URL}${Endpoints.Random}`);
    if (!response.ok) {
        throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
});

export const fetchMoviesTop = createAsyncThunk("movies/fetchMoviesTop", async () => {
    const response = await fetch(`${BASE_URL}${Endpoints.Top10}`);
    if (!response.ok) {
        throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
});

export const fetchQuery = async ({ value }: { value: string }) => {
    const response = await fetch(`${BASE_URL}?title=${value}`);
    if (!response.ok) {
        throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
};
