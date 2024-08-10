import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Box, Button, FormControl, FormLabel, Input, Text } from "@chakra-ui/react";
import { setEmail, setName, setPassword, setSurname } from "../model/userSlice";
import { validatePassword } from "../../../utils/validation";
import { fetchMe, loginUser } from "../../user/api/fetchUser";
import { useNavigate } from "react-router-dom";

const UserFormLogin: React.FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [inputEmail, setInputEmail] = useState("");
    const [inputPassword, setInputPassword] = useState("");
    const [errorPassword, setErrorPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const passwordError = validatePassword(inputPassword);
        if (passwordError) {
            setErrorPassword(passwordError);
            return;
        }
        setErrorPassword("");

        try {
            await loginUser({
                email: inputEmail,
                password: inputPassword,
            });
            const userData = await fetchMe();
            dispatch(setEmail(userData.email));
            dispatch(setPassword(inputPassword));
            dispatch(setName(userData.name));
            dispatch(setSurname(userData.surname));
            navigate("/");
        } catch (error) {
            setErrorPassword("");
            if (error instanceof Error) {
                setError(error.message);
            } else {
                setError("Login failed. Please try again.");
            }
        }
    };

    return (
        <Box as="form" onSubmit={handleSubmit} width="100%">
            <FormControl id="email" mb={4} isRequired>
                <FormLabel>Email</FormLabel>
                <Input
                    type="email"
                    value={inputEmail}
                    onChange={(e) => setInputEmail(e.target.value)}
                />
            </FormControl>
            <FormControl id="password" mb={4} isRequired isInvalid={!!errorPassword}>
                <FormLabel>Password</FormLabel>
                <Input
                    type={"password"}
                    value={inputPassword}
                    onChange={(e) => setInputPassword(e.target.value)}
                />
                {errorPassword ? (
                    <Text color="red.500" fontSize="xs">
                        {errorPassword}
                    </Text>
                ) : (
                    <Text color="transparent" fontSize="xs">
                        Placeholder text
                    </Text>
                )}
            </FormControl>
            <Button
                colorScheme="teal"
                type="submit"
                width="100%"
                borderRadius="full"
                bg="var(--color-button-bg)"
                _hover={{ bg: "var(--color-button-hover-bg)" }}
            >
                Log In
            </Button>
            {error ? (
                <Text color="red.500" fontSize="xs">
                    {error}
                </Text>
            ) : (
                <Text color="transparent" fontSize="xs">
                    Placeholder text
                </Text>
            )}
        </Box>
    );
};

export default UserFormLogin;
