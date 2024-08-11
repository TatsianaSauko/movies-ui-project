import { render, screen, fireEvent } from "@testing-library/react";
import { act } from "react";
import MovieCard, { MovieCardProps } from "../MovieCard";
import { ChakraProvider } from "@chakra-ui/react";

const mockMovie = {
    id: 2,
    title: "Ariel",
    originalTitle: "Ariel",
    language: "fi",
    releaseYear: 1988,
    releaseDate: "1988-10-21",
    genres: ["drama", "comedy", "romance", "crime"],
    plot: "After the coal mine he works at closes and his father commits suicide, a Finnish man leaves for the city to make a living but there, he is framed and imprisoned for various crimes.",
    runtime: 73,
    budget: null,
    revenue: null,
    homepage: "",
    status: "released",
    posterUrl: "https://cinemaguide.skillbox.cc/images/2/ojDg0PGvs6R9xYFodRct2kdI6wC.jpg",
    backdropUrl: "https://cinemaguide.skillbox.cc/images/2/hQ4pYsIbP22TMXOUdSfC2mjWrO0.jpg",
    trailerUrl: "https://youtube.com/watch?v=LPkNFRemZrM",
    trailerYouTubeId: "LPkNFRemZrM",
    tmdbRating: 7.09,
    searchL: "ariel. aki kaurismäki. aki kaurismaki",
    keywords: [],
    countriesOfOrigin: [],
    languages: [],
    cast: [],
    director: "Aki Kaurismäki",
    production: null,
    awardsSummary: null,
};

const renderMovieCard = (props: Partial<MovieCardProps> = {}) => {
    const defaultProps: MovieCardProps = {
        movie: mockMovie,
        onClick: jest.fn(),
        ...props,
    };

    render(
        <ChakraProvider>
            <MovieCard {...defaultProps} />
        </ChakraProvider>,
    );
};
describe("MovieCard Component", () => {
    it("renders the movie title", () => {
        renderMovieCard();
        const titleElement = screen.getByText(/Ariel/i);
        expect(titleElement).toBeInTheDocument();
    });

    it("renders the movie poster", () => {
        renderMovieCard();
        const posterElement = screen.getByAltText(/Ariel poster/i);
        expect(posterElement).toBeInTheDocument();
        expect(posterElement).toHaveAttribute("src", mockMovie.posterUrl);
    });

    it("calls onClick when the card is clicked", () => {
        const onClick = jest.fn();
        renderMovieCard({ onClick });
        const cardElement = screen.getByRole("button");
        act(() => {
            fireEvent.click(cardElement);
        });
        expect(onClick).toHaveBeenCalledTimes(1);
    });
});
