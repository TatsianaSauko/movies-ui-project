import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import { setSelectedMovie } from "../features/movie/model/movieSlice";
import LoadingSkeleton from "../shared/LoadingSkeleton";
import { fetchMoviesTop } from "../features/movie/api/fetchMovies";
import { Movie } from "../features/movie/model/movieTypes";
import { AppDispatch, RootState } from "@/app/store";
import MovieDisplay from "../features/ui/MovieDisplay";

const Popular: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();
    const popular = useSelector((state: RootState) => state.movies.popular);
    const status = useSelector((state: RootState) => state.movies.popularStatus);
    const error = useSelector((state: RootState) => state.movies.error);
    const [sliderValue, setSliderValue] = useState(10);

    useEffect(() => {
        if (status === "idle") {
            dispatch(fetchMoviesTop());
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
        <Box mt="80px">
            <MovieDisplay
                movies={popular}
                sliderValue={sliderValue}
                setSliderValue={setSliderValue}
                handleMovieClick={handleMovieClick}
            />
        </Box>
    );
};

export default Popular;
