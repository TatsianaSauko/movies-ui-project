import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../app/store";
import { clearUser } from "../features/user/model/userSlice";
import { Box, Heading, Text, Button, VStack, HStack } from "@chakra-ui/react";
import { logout } from "../features/user/api/fetchUser";

const Profile: React.FC = () => {
    const dispatch = useDispatch();
    const email = useSelector((state: RootState) => state.user.email);
    const name = useSelector((state: RootState) => state.user.name);
    const surname = useSelector((state: RootState) => state.user.surname);
    const password = useSelector((state: RootState) => state.user.password);

    const handleLogout = async () => {
        await logout();
        dispatch(clearUser());
    };

    return (
        <Box
            maxW="md"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            p={6}
            boxShadow="lg"
            bg="white"
            margin={"auto"}
            position="relative"
            top="80px"
        >
            <VStack spacing={4} align="start">
                <Heading as="h2" size="lg" mb={4}>
                    User profile
                </Heading>
                <HStack>
                    <Text fontWeight="bold">Name:</Text>
                    <Text>{name}</Text>
                </HStack>
                <HStack>
                    <Text fontWeight="bold">Surname:</Text>
                    <Text>{surname}</Text>
                </HStack>
                <HStack>
                    <Text fontWeight="bold">Email:</Text>
                    <Text>{email}</Text>
                </HStack>
                <HStack>
                    <Text fontWeight="bold">Password:</Text>
                    <Text>{password}</Text>
                </HStack>
                <Button
                    colorScheme="teal"
                    onClick={handleLogout}
                    width="full"
                    borderRadius="full"
                    bg="rgba(106, 93, 194, 1)"
                    _hover={{ bg: "rgba(106, 93, 194, 0.8)" }}
                >
                    Logout
                </Button>
            </VStack>
        </Box>
    );
};

export default Profile;
