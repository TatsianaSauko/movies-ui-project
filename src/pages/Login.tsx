import React from "react";
import { Box, Text, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import UserFormLogin from "../features/user/ui/UserFormLogin";

const Login: React.FC = () => {
    return (
        <Box
            maxW="420px"
            margin="auto"
            bg="white"
            p="64px 40px"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap="20px"
            position="relative"
            top="80px"
            borderRadius="15px"
            boxShadow="lg"
        >
            <Text
                fontSize="2xl"
                fontWeight="bold"
                bgGradient="linear(to-r, rgba(106, 93, 194, 1), rgba(220, 93, 252, 1))"
                backgroundClip="text"
            >
                Movies
            </Text>
            <UserFormLogin />
            <Link as={RouterLink} to="/register">
                <Text as="b">Register</Text>
            </Link>
        </Box>
    );
};

export default Login;
