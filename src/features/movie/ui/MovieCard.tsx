import React from "react";
import { Box, Card, Image, Text } from "@chakra-ui/react";
import { Movie } from "../model/movieInterfaces";

export interface MovieCardProps {
    movie: Movie;
    onClick: () => void;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie, onClick }) => (
    <Card
        onClick={onClick}
        role="button"
        cursor="pointer"
        maxW="sm"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        bgColor="rgba(255, 255, 255, 0.33)"
        position="relative"
        _hover={{ transform: "scale(1.05)", transition: "0.3s" }}
    >
        <Image
            src={movie.posterUrl}
            alt={`${movie.title} poster`}
            width="224px"
            height="336px"
            objectFit="cover"
        />
        <Box
            position="absolute"
            bottom="0"
            left="0"
            width="100%"
            height="100%"
            bg="var(--background-secondary)"
            color="var(--color-primary)"
            p="4"
            opacity="0"
            _hover={{ opacity: "1", transition: "0.3s" }}
            display="flex"
            flexDirection="column"
            justifyContent="flex-end"
        >
            <Text fontSize="lg" fontWeight="bold">
                {movie.title}
            </Text>
            <Text fontSize="sm">Director: {movie.director}</Text>
            <Text fontSize="sm">Date: {movie.releaseDate}</Text>
            <Text fontSize="sm">Rating: {movie.tmdbRating}</Text>
            <Text fontSize="sm">runtime: {movie.runtime}</Text>
        </Box>
    </Card>
);

export default MovieCard;
