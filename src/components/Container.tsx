import { Box } from "@chakra-ui/react";
import React from "react";

interface ContainerProps {
    children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
    return <Box>{children}</Box>;
};

export default Container;
