import React, { useState, useEffect } from "react";
import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { fetchSuggestions } from "../../features/movie/api/fetchMovies";
import styles from "./SearchBar.module.scss";
import { Movie } from "@/features/movie/model/movieTypes";
import { useNavigate } from "react-router-dom";
import { RootState } from "@/app/store";
import { useSelector } from "react-redux";

const SearchBar: React.FC = () => {
    const [query, setQuery] = useState("");
    const [movies, setMovies] = useState<Movie[]>([]);
    const navigate = useNavigate();
    const name = useSelector((state: RootState) => state.user.name);

    const fetchData = async () => {
        if (!name) {
            navigate("/login");
            setQuery("");
            return;
        }

        if (query.length > 2) {
            try {
                const data = await fetchSuggestions({ count: 5, value: query });
                setMovies(Array.isArray(data) ? data : []);
            } catch (error) {
                setMovies([]);
            }
        }
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            fetchData();
        }
    };

    return (
        <div className={styles.searchBar}>
            <input
                type="text"
                placeholder="Search movies..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                className={styles.search}
            />
            {movies.length > 0 && (
                <Menu>
                    <MenuButton as={Button} className={styles.menuButton}>
                        Results
                    </MenuButton>
                    <MenuList>
                        {movies.map((movie) => (
                            <MenuItem key={movie.id} className={styles.movie}>
                                {movie.title}
                            </MenuItem>
                        ))}
                    </MenuList>
                </Menu>
            )}
        </div>
    );
};

export default SearchBar;
