import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState, AppDispatch } from "../../app/store";
import { fetchMovies } from "../movie/api/fetchMovies";
import MovieDisplay from "./MovieDisplay";
import { Movie } from "../movie/model/movieTypes";
import { Box } from "@chakra-ui/react";
import { setSelectedMovie } from "../movie/model/movieSlice";
import LoadingSkeleton from "../../shared/LoadingSkeleton";

const MovieList: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();
    const movies = useSelector((state: RootState) => state.movies.movies);
    const status = useSelector((state: RootState) => state.movies.status);
    const error = useSelector((state: RootState) => state.movies.error);
    const [sliderValue, setSliderValue] = useState(10);

    useEffect(() => {
        if (status === "idle") {
            dispatch(fetchMovies());
        }
    }, [status, dispatch]);

    const handleMovieClick = (movie: Movie) => {
        dispatch(setSelectedMovie(movie));
        navigate(`/movies/${movie.id}`);
    };

    if (status === "loading") {
        return <LoadingSkeleton />;
    }

    if (status === "failed") {
        return <Box>Error: {error}</Box>;
    }

    return (
        <MovieDisplay
            movies={movies}
            sliderValue={sliderValue}
            setSliderValue={setSliderValue}
            handleMovieClick={handleMovieClick}
        />
    );
};

export default MovieList;
