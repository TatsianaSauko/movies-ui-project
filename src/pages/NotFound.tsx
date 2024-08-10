import React from "react";
import { Box, Text, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
    return (
        <Box textAlign="center" py={10} px={6}>
            <Text fontSize="6xl" fontWeight="bold" color="red.500">
                404
            </Text>
            <Text fontSize="2xl" mt={3} mb={2}>
                Page Not Found
            </Text>
            <Text color="gray.500" mb={6}>
                The page you&apos;re looking for does not seem to exist
            </Text>
            <Button
                as={Link}
                to="/"
                variant="solid"
                size="md"
                color="var(--color-primary)"
                bg="var(--color-button-bg)"
                _hover={{ bg: "var(--color-button-hover-bg)" }}
            >
                Go to Home
            </Button>
        </Box>
    );
};

export default NotFound;
