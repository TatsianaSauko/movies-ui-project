import React, { useState } from "react";
import { fetchQuery } from "../../features/movie/api/fetchMovies";
import { useDispatch } from "react-redux";
import { setMovies, setSearch } from "../../features/movie/model/movieSlice";
import { Input, Box } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const SearchBar: React.FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [query, setQuery] = useState("");

    const fetchData = async () => {
        if (query.length > 2) {
            try {
                const data = await fetchQuery({ value: query });
                dispatch(setSearch(Array.isArray(data) ? data : []));
                setQuery("");
                navigate(`/search`);
            } catch (error) {
                dispatch(setMovies([]));
            }
        }
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            fetchData();
        }
    };

    return (
        <Box>
            <Input
                type="text"
                placeholder="Search movies..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                color="white"
                bg="gray.600"
                border="none"
                _placeholder={{ color: "gray.400" }}
                _focus={{ boxShadow: "none" }}
            />
        </Box>
    );
};

export default SearchBar;
