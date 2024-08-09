import RandomMovie from "../features/ui/RandomMovie";
import MovieList from "../features/ui/MovieList";
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
