import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../app/store";
import { Box, Text } from "@chakra-ui/react";
import MovieInfo from "./MovieInfo";

const MovieDetails: React.FC = () => {
    const selectedMovie = useSelector((state: RootState) => state.movies.selectedMovie);

    if (!selectedMovie) {
        return <Box>No movie selected</Box>;
    }

    return (
        <>
            <MovieInfo movie={selectedMovie} />;
            <Text fontSize="4xl" as="b" color="var(--color-primary)" pl="20px">
                About movie
            </Text>
            <Box
                margin="auto"
                display="flex"
                flexDirection="column"
                gap="10px"
                color="var(--color-primary)"
            >
                <Text fontSize="lg">Director: {selectedMovie.director}</Text>
                <Text fontSize="lg">Date: {selectedMovie.releaseDate}</Text>
                <Text fontSize="lg">Rating: {selectedMovie.tmdbRating}</Text>
                <Text fontSize="lg">Runtime: {selectedMovie.runtime}</Text>
            </Box>
        </>
    );
};

export default MovieDetails;
