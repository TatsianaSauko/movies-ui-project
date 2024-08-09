import React from "react";
import { Box, HStack, IconButton, Link } from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer: React.FC = () => {
    return (
        <Box as="footer" color="white">
            <HStack justify="center" spacing={4}>
                <Link href="https://github.com/TatsianaSauko" isExternal>
                    <IconButton
                        aria-label="GitHub"
                        icon={<FaGithub size={20} />}
                        variant="ghost"
                        color="white"
                        _hover={{ bg: "gray.700" }}
                    />
                </Link>
                <Link href="https://www.linkedin.com/in/tatsiana-savko-278104230/" isExternal>
                    <IconButton
                        aria-label="LinkedIn"
                        icon={<FaLinkedin size={20} />}
                        variant="ghost"
                        color="white"
                        _hover={{ bg: "gray.700" }}
                    />
                </Link>
            </HStack>
        </Box>
    );
};

export default Footer;
