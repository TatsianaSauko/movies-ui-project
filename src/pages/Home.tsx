import RandomMovie from "../features/movie/ui/RandomMovie";
import MovieList from "../features/movie/ui/MovieList";
import React from "react";

const Home: React.FC = () => {
    return (
        <div>
            <RandomMovie />
            <MovieList />
        </div>
    );
};

export default Home;
