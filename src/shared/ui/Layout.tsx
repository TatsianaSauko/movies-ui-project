import React from "react";
import Header from "../../widgets/Header";
import Footer from "../../widgets/Footer";
import { Box } from "@chakra-ui/react";

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <Box display="flex" flexDirection="column" minHeight="100vh">
            <Header />
            <Box as="main" flex="1" p="0 20px">
                {children}
            </Box>
            <Footer />
        </Box>
    );
};

export default Layout;
