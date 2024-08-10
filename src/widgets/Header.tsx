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
import SearchBar from "../shared/ui/SearchBar";

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
            bg="var(--background-secondary)"
            color="var(--color-primary)"
            backdropFilter="blur(4px)"
            zIndex="2"
            p={{ base: "10px 10px", md: "10px 20px", lg: "10px 60px" }}
        >
            <Flex justify="space-between" align="center">
                <HStack spacing={spacing}>
                    <Text
                        fontSize="2xl"
                        fontWeight="bold"
                        bgGradient="var(--gradient-logo)"
                        backgroundClip="text"
                    >
                        Movies
                    </Text>
                    {!isSearchBarVisible && (
                        <HStack as="nav" spacing={spacing}>
                            <Box as={Link} to="/" _hover={{ color: "var(--color-nav-hover)" }}>
                                Home
                            </Box>
                            <Box
                                as={Link}
                                to="/popular"
                                _hover={{ color: "var(--color-nav-hover)" }}
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
                            color="var(--color-primary)"
                            _hover={{ color: "var(--color-nav-hover)" }}
                        />
                    )}
                    {isSearchBarVisible && !isLargerThan600 && <SearchBar />}
                    {!isSearchBarVisible &&
                        (name ? (
                            <Box
                                as={Link}
                                to="/profile"
                                _hover={{ color: "var(--color-nav-hover)" }}
                            >
                                <Text>{name}</Text>
                            </Box>
                        ) : (
                            <Box as={Link} to="/login" _hover={{ color: "var(--color-nav-hover)" }}>
                                <FaSignInAlt size={20} />
                            </Box>
                        ))}
                </HStack>
            </Flex>
        </Box>
    );
};

export default Header;
