import React from "react";
import { Box, SkeletonCircle, SkeletonText } from "@chakra-ui/react";

const LoadingSkeleton: React.FC = () => {
    return (
        <Box padding="20" boxShadow="lg" position="relative" top="80px">
            <SkeletonCircle size="10" />
            <SkeletonText mt="4" noOfLines={4} spacing="4" skeletonHeight="2" />
        </Box>
    );
};

export default LoadingSkeleton;
