import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRandomMovie } from "../movie/api/fetchMovies";
import { RootState, AppDispatch } from "../../app/store";
import { Box } from "@chakra-ui/react";
import MovieInfo from "./MovieInfo";

const RandomMovie: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const randomMovie = useSelector((state: RootState) => state.movies.randomMovie);
    const randomMovieStatus = useSelector((state: RootState) => state.movies.randomMovieStatus);

    useEffect(() => {
        if (randomMovieStatus === "idle") {
            dispatch(fetchRandomMovie());
        }
    }, [randomMovieStatus, dispatch]);

    if (!randomMovie) {
        return <Box>No movie</Box>;
    }

    return <MovieInfo movie={randomMovie} />;
};

export default RandomMovie;
