import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRandomMovie } from "../movie/api/fetchMovies";
import { RootState, AppDispatch } from "../../app/store";
import styles from "./RandomMovie.module.scss";
import { Box, SkeletonCircle, SkeletonText } from "@chakra-ui/react";

const RandomMovie: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const randomMovie = useSelector((state: RootState) => state.movies.randomMovie);
    const randomMovieStatus = useSelector((state: RootState) => state.movies.randomMovieStatus);

    useEffect(() => {
        if (randomMovieStatus === "idle") {
            dispatch(fetchRandomMovie());
        }
    }, [randomMovieStatus, dispatch]);

    const displayedMovie = randomMovie;

    if (!displayedMovie) {
        return (
            <Box padding="20" boxShadow="lg">
                <SkeletonCircle size="10" />
                <SkeletonText mt="4" noOfLines={4} spacing="4" skeletonHeight="2" />
            </Box>
        );
    }

    return (
        <div className={styles["selected-movie"]}>
            <div className={styles["selected-movie-info"]}>
                <h2>
                    {displayedMovie.title} ({displayedMovie.releaseYear})
                </h2>
                <p>{displayedMovie.plot}</p>
                <a href={displayedMovie.trailerUrl} target="_blank" rel="noopener noreferrer">
                    Play
                </a>
            </div>
            <img
                src={displayedMovie.posterUrl}
                alt={`${displayedMovie.title} poster`}
                className={styles["selected-movie-poster"]}
            />
        </div>
    );
};

export default RandomMovie;
