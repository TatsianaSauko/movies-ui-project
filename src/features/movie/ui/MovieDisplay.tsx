import React from "react";
import { Box, Flex, Slider, SliderTrack, SliderFilledTrack, SliderThumb } from "@chakra-ui/react";
import MovieCard from "./MovieCard";
import { MovieDisplayProps } from "../model/movieInterfaces";

const MovieDisplay: React.FC<MovieDisplayProps> = ({
    movies,
    sliderValue,
    setSliderValue,
    handleMovieClick,
}) => {
    return (
        <Box>
            <Flex
                wrap="wrap"
                justify="space-around"
                maxW="var(--container-max-width)"
                mx="auto"
                p="20px"
                gap="40px"
            >
                {movies.length &&
                    movies.slice(0, sliderValue).map((movie) => (
                        <Box key={movie.id}>
                            <MovieCard movie={movie} onClick={() => handleMovieClick(movie)} />
                        </Box>
                    ))}
            </Flex>
            {movies.length ? (
                <Box p="20px">
                    <Slider
                        aria-label="slider-ex-1"
                        defaultValue={10}
                        min={1}
                        max={movies.length}
                        step={1}
                        onChange={(val) => setSliderValue(val)}
                    >
                        <SliderTrack>
                            <SliderFilledTrack />
                        </SliderTrack>
                        <SliderThumb />
                    </Slider>
                </Box>
            ) : null}
        </Box>
    );
};

export default MovieDisplay;
