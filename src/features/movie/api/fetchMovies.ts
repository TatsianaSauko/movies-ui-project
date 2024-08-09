import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "https://cinemaguide.skillbox.cc/movie";

export const fetchMovies = createAsyncThunk("movies/fetchMovies", async () => {
    const response = await axios.get(`${BASE_URL}`);
    return response.data;
});

export const fetchRandomMovie = createAsyncThunk("movies/fetchRandomMovie", async () => {
    const response = await axios.get(`${BASE_URL}/random`);
    return response.data;
});

export const fetchMoviesTop = createAsyncThunk("movies/fetchMoviesTop", async () => {
    const response = await axios.get(`${BASE_URL}/top10`);
    return response.data;
});

export const fetchSuggestions = async ({ count, value }: { count: number; value: string }) => {
    const response = await fetch(`${BASE_URL}/movie?count=${count}&title=${value}`);
    const data = await response.json();
    console.log(data);
    return data;
};
