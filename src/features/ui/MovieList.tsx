import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState, AppDispatch } from "../../app/store";
import { fetchMovies } from "../movie/api/fetchMovies";
import MovieCard from "./MovieCard";
import styles from "./MovieList.module.scss";
import { Movie } from "../movie/model/movieTypes";
import { Skeleton, Stack } from "@chakra-ui/react";
import RandomMovie from "./RandomMovie";
import { setSelectedMovie } from "../movie/model/movieSlice";

const MovieList: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();
    const movies = useSelector((state: RootState) => state.movies.movies);
    const status = useSelector((state: RootState) => state.movies.status);
    const error = useSelector((state: RootState) => state.movies.error);

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
        return (
            <Stack>
                <Skeleton height="20px" />
                <Skeleton height="20px" />
                <Skeleton height="20px" />
            </Stack>
        );
    }

    if (status === "failed") {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <RandomMovie />
            <div className={styles["movie-list"]}>
                {movies &&
                    movies
                        .slice(0, 10)
                        .map((movie) => (
                            <MovieCard
                                key={movie.id}
                                movie={movie}
                                onClick={() => handleMovieClick(movie)}
                            />
                        ))}
            </div>
        </div>
    );
};

export default MovieList;
