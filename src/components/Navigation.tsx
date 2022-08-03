import { Box, BoxProps, Container, Flex, useColorMode } from "@chakra-ui/react";
import React from "react";
import ThemeButton from "./Buttons/ThemeButton";
import Logo from "./Logo";

interface NavigationProps {}

const Navigation: React.FC<NavigationProps & BoxProps> = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <Box
            // boxShadow="lg"
            pos={"fixed"}
            top="0"
            left="0"
            right={"0"}
            zIndex={"100"}
            bg="gray.800"
            borderBottomWidth={1}
            borderBottomColor="gray.700"
        >
            <Container maxW="container.xl">
                <Flex h="70px" align="center" justify="space-between">
                    <Box>
                        <Logo />
                    </Box>
                    <Box>
                        <ThemeButton />
                    </Box>
                </Flex>
            </Container>
        </Box>
    );
};

export default Navigation;
