import React from "react";
import { Box, Text, VStack, Button } from "@chakra-ui/react";
import { Movie } from "../movie/model/movieTypes";

interface MovieInfoProps {
    movie: Movie;
}

const MovieInfo: React.FC<MovieInfoProps> = ({ movie }) => {
    return (
        <>
            <Box
                display="flex"
                flexDirection={{ base: "column", md: "row" }}
                alignItems="center"
                justifyContent="center"
                gap="20px"
                color="white"
                borderRadius="md"
                boxShadow="lg"
                mb="20px"
            >
                <VStack align="start" spacing="4" order={{ base: 2, md: 1 }}>
                    <Text fontSize="2xl" fontWeight="bold">
                        {movie.title} ({movie.releaseYear})
                    </Text>
                    <Text>{movie.plot}</Text>
                    <Button
                        as="a"
                        href={movie.trailerUrl}
                        variant="solid"
                        size="md"
                        bg="rgba(106, 93, 194, 1)"
                        _hover={{ bg: "rgba(106, 93, 194, 0.8)" }}
                    >
                        Play
                    </Button>
                </VStack>
                <Box
                    bgImage={`url(${movie.posterUrl})`}
                    bgSize="cover"
                    bgPosition="top"
                    borderRadius="md"
                    height={{ base: "400px", md: "600px" }}
                    width="100%"
                    bgRepeat="no-repeat"
                    bgColor="gray.700"
                    order={{ base: 1, md: 2 }}
                ></Box>
            </Box>
        </>
    );
};

export default MovieInfo;
