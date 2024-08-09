import React from "react";
import { Box, Flex, Slider, SliderTrack, SliderFilledTrack, SliderThumb } from "@chakra-ui/react";
import MovieCard from "./MovieCard";
import { Movie } from "../movie/model/movieTypes";

interface MovieDisplayProps {
    movies: Movie[];
    sliderValue: number;
    setSliderValue: (value: number) => void;
    handleMovieClick: (movie: Movie) => void;
}

const MovieDisplay: React.FC<MovieDisplayProps> = ({
    movies,
    sliderValue,
    setSliderValue,
    handleMovieClick,
}) => {
    return (
        <Box>
            <Flex wrap="wrap" justify="space-around" maxW="1440px" mx="auto" p="20px" gap="40px">
                {movies &&
                    movies.slice(0, sliderValue).map((movie) => (
                        <Box key={movie.id}>
                            <MovieCard movie={movie} onClick={() => handleMovieClick(movie)} />
                        </Box>
                    ))}
            </Flex>
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
        </Box>
    );
};

export default MovieDisplay;
