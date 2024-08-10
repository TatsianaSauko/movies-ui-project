import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Box, Button, FormControl, FormLabel, Input, Text } from "@chakra-ui/react";
import { setEmail, setName, setPassword, setSurname } from "../model/userSlice";
import { validatePassword } from "../../../utils/validation";
import { registerUser } from "../../user/api/fetchUser";
import { useNavigate } from "react-router-dom";

const UserFormRegister: React.FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [inputEmail, setInputEmail] = useState("");
    const [inputPassword, setInputPassword] = useState("");
    const [inputName, setInputName] = useState("");
    const [inputSurname, setInputSurname] = useState("");
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
            await registerUser({
                email: inputEmail,
                password: inputPassword,
                name: inputName,
                surname: inputSurname,
            });
            dispatch(setEmail(inputEmail));
            dispatch(setPassword(inputPassword));
            dispatch(setName(inputName));
            dispatch(setSurname(inputSurname));
            navigate("/");
        } catch (error) {
            setErrorPassword("");
            console.log(error);
            if (error instanceof Error) {
                setError(error.message);
            } else {
                setError("Registration failed. Please try again.");
            }
        }
    };

    return (
        <Box as="form" onSubmit={handleSubmit} width="100%">
            <FormControl id="name" mb={4} isRequired>
                <FormLabel>Name</FormLabel>
                <Input
                    type="text"
                    value={inputName}
                    onChange={(e) => setInputName(e.target.value)}
                />
            </FormControl>
            <FormControl id="surname" mb={4} isRequired>
                <FormLabel>Surname</FormLabel>
                <Input
                    type="text"
                    value={inputSurname}
                    onChange={(e) => setInputSurname(e.target.value)}
                />
            </FormControl>
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
                Create account
            </Button>
            {error ? (
                <Text color="red.500" fontSize="xs">
                    {error}
                </Text>
            ) : null}
        </Box>
    );
};

export default UserFormRegister;
