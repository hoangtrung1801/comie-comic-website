import {
    Box,
    Container,
    Flex,
    Heading,
    Text,
    Link as LinkChakra,
    BoxProps,
    Button,
    useColorMode,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

interface NavigationProps {}

const Navigation: React.FC<NavigationProps & BoxProps> = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <Box
            boxShadow="lg"
            pos={"fixed"}
            top="0"
            left="0"
            right={"0"}
            zIndex={"100"}
            minH="80px"
            bg="gray.800"
            borderBottomWidth={1}
            borderBottomColor="gray.700"
        >
            <Container
                maxW="container.xl"
                h="70px"
                display="flex"
                alignItems="center"
            >
                <Heading size={"2xl"} fontWeight="extrabold">
                    <Link href="/">
                        <LinkChakra
                            _hover={{ textDecor: "none" }}
                            bgClip="text"
                            bgGradient="linear(to-b, orange.400, orange.600)"
                        >
                            COMIE
                        </LinkChakra>
                    </Link>
                </Heading>
                {/* <Button onClick={toggleColorMode}>toggle color</Button> */}
            </Container>
        </Box>
    );
};

export default Navigation;
