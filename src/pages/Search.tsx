import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Box, Text } from "@chakra-ui/react";
import { setSelectedMovie } from "../features/movie/model/movieSlice";
import { Movie } from "../features/movie/model/movieInterfaces";
import { AppDispatch, RootState } from "@/app/store";
import MovieDisplay from "../features/movie/ui/MovieDisplay";

const Search: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();
    const search = useSelector((state: RootState) => state.movies.search);
    const [sliderValue, setSliderValue] = useState(10);

    const handleMovieClick = (movie: Movie) => {
        dispatch(setSelectedMovie(movie));
        navigate(`/movies/${movie.id}`);
    };

    return (
        <Box mt="80px">
            <Text
                fontSize="2xl"
                fontWeight="bold"
                textAlign="center"
                color="var(--color-primary)"
                pt="80px"
            >
                {search.length === 0 ? "NOTHING FOUND" : "Your request found:"}
            </Text>
            <MovieDisplay
                movies={search}
                sliderValue={sliderValue}
                setSliderValue={setSliderValue}
                handleMovieClick={handleMovieClick}
            />
        </Box>
    );
};

export default Search;
