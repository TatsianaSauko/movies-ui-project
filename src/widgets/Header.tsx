import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import { FaSignInAlt, FaSearch } from "react-icons/fa";
import {
    Box,
    Flex,
    Text,
    HStack,
    IconButton,
    useMediaQuery,
    Spacer,
    useBreakpointValue,
} from "@chakra-ui/react";
import SearchBar from "../shared/SearchBar/SearchBar";

const Header: React.FC = () => {
    const name = useSelector((state: RootState) => state.user.name);
    const [isSearchBarVisible, setIsSearchBarVisible] = useState(false);
    const [isLargerThan600] = useMediaQuery("(min-width: 600px)");

    const toggleSearchBar = () => {
        setIsSearchBarVisible(!isSearchBarVisible);
    };

    const spacing = useBreakpointValue({ base: "10px", md: "30px" });

    return (
        <Box
            as="header"
            position="fixed"
            width="100%"
            bg="rgba(0, 0, 0, 0.5)"
            color="white"
            backdropFilter="blur(4px)"
            zIndex="2"
            p="10px 20px"
        >
            <Flex justify="space-between" align="center">
                <HStack spacing={spacing}>
                    <Text
                        fontSize="2xl"
                        fontWeight="bold"
                        bgGradient="linear(to-r, rgba(106, 93, 194, 1), rgba(220, 93, 252, 1))"
                        backgroundClip="text"
                    >
                        Movies
                    </Text>
                    {!isSearchBarVisible && (
                        <HStack as="nav" spacing={spacing}>
                            <Box as={Link} to="/" _hover={{ color: "rgba(106, 93, 194, 1)" }}>
                                Home
                            </Box>
                            <Box
                                as={Link}
                                to="/popular"
                                _hover={{ color: "rgba(106, 93, 194, 1)" }}
                            >
                                Popular
                            </Box>
                        </HStack>
                    )}
                </HStack>
                <Spacer />
                <HStack spacing={spacing}>
                    {isLargerThan600 ? (
                        <SearchBar />
                    ) : (
                        <IconButton
                            aria-label="Search"
                            icon={<FaSearch size={20} />}
                            onClick={toggleSearchBar}
                            variant="ghost"
                            color="white"
                            _hover={{ color: "rgba(106, 93, 194, 1)" }}
                        />
                    )}
                    {isSearchBarVisible && !isLargerThan600 && <SearchBar />}
                    {!isSearchBarVisible &&
                        (name ? (
                            <Box
                                as={Link}
                                to="/profile"
                                _hover={{ color: "rgba(106, 93, 194, 1)" }}
                            >
                                <Text>{name}</Text>
                            </Box>
                        ) : (
                            <Box as={Link} to="/login" _hover={{ color: "rgba(106, 93, 194, 1)" }}>
                                <FaSignInAlt size={20} />
                            </Box>
                        ))}
                </HStack>
            </Flex>
        </Box>
    );
};

export default Header;
