import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import styles from "./RandomMovie.module.scss";
import movieStyles from "./MovieDetails.module.scss";
import { Text } from "@chakra-ui/react";

const MovieDetails: React.FC = () => {
    const selectedMovie = useSelector((state: RootState) => state.movies.selectedMovie);

    if (!selectedMovie) {
        return <div>No movie selected</div>;
    }

    return (
        <>
            <div className={styles["selected-movie"]}>
                <div className={styles["selected-movie-info"]}>
                    <h2>
                        {selectedMovie.title} ({selectedMovie.releaseYear})
                    </h2>
                    <p>{selectedMovie.plot}</p>
                    <a href={selectedMovie.trailerUrl} target="_blank" rel="noopener noreferrer">
                        Play
                    </a>
                </div>
                <img
                    src={selectedMovie.posterUrl}
                    alt={`${selectedMovie.title} poster`}
                    className={styles["selected-movie-poster"]}
                />
            </div>
            <div className={movieStyles["movie-details"]}>
                <Text fontSize="lg">Director: {selectedMovie.director}</Text>
                <Text fontSize="lg">Date: {selectedMovie.releaseDate}</Text>
                <Text fontSize="lg">Rating: {selectedMovie.tmdbRating}</Text>
                <Text fontSize="lg">Runtime: {selectedMovie.runtime}</Text>
            </div>
        </>
    );
};

export default MovieDetails;
